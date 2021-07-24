import { observer } from 'mobx-react';
import React, { ReactElement, useEffect } from 'react';
import { Alert, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { useImageUpload } from '../../../hooks/image-upload.hook';
import { useStore } from '../../../hooks/store.hook';
import { Navigation } from '../../../interfaces';
import { IHashtags } from '../../../store/hashtags';
import { IUpload } from '../../../store/upload';
import { Colors } from '../../../theme';
import { DateComponent } from '../../common/date';
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
                <View style={styles.button}>
                    {upload.original ? (
                        <Image source={{ uri: upload.original } as ImageSourcePropType} style={styles.box} />
                    ) : (
                        <View style={styles.box}>
                            <Text style={styles.text}>Loading ...</Text>
                        </View>
                    )}
                </View>
                <HashtagsList />
                {!showShareButton && <Actions navigation={navigation} />}
            </>
        </Container>
    );
});

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        height: 300,
        marginBottom: 20,
        backgroundColor: Colors.yellow100,
    },
    button: {
        borderRadius: 10,
        marginBottom: 20,
    },
    text: {
        padding: 10,
        fontSize: 16,
    },
});
