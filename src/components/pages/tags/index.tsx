import { observer } from 'mobx-react';
import React, { ReactElement, useEffect } from 'react';
import { Alert } from 'react-native';

import { useImageUpload } from '../../../hooks/image-upload.hook';
import { useStore } from '../../../hooks/store.hook';
import { Navigation } from '../../../interfaces';
import { IHashtags } from '../../../store/hashtags';
import { IUpload } from '../../../store/upload';
import { DateComponent } from '../../common/date';
import { UploadedMedia } from '../../common/uploaded-media';
import { Container } from '../../layout/container';
import { HashtagsList } from './hashtags-list';
import { Actions } from './next-steps';

interface IProps {
    navigation: Navigation;
}

export const Tags = observer(({ navigation }: IProps): ReactElement => {
    const imageUpload = useImageUpload();

    const upload = useStore<IUpload>(state => state.upload);
    const hashtags = useStore<IHashtags>(state => state.hashtags);

    const showShareButton = hashtags.loading && upload.original && hashtags.tags;

    useEffect(() => {
        const publishPhotoToFirebase = async (uri: string): Promise<void> => {
            const storedImageUrl = await imageUpload(uri).catch(error => Alert.alert(error));
            if (storedImageUrl) await hashtags.run(storedImageUrl).catch(error => Alert.alert(error));
        };

        if (upload.file) publishPhotoToFirebase(upload.file).catch(error => Alert.alert(error));

        return () => {
            hashtags.reset().catch(error => Alert.alert(error));
        };
    }, []);

    return (
        <Container>
            <>
                <DateComponent />
                <UploadedMedia />
                <HashtagsList />
                {!showShareButton && <Actions navigation={navigation} />}
            </>
        </Container>
    );
});
