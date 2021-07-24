import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { Alert, Clipboard, StyleSheet, View } from 'react-native';
import Share from 'react-native-share';

import { useStore } from '../../../../hooks/store.hook';
import { Navigation } from '../../../../interfaces';
import { IHashtags } from '../../../../store/hashtags';
import { IUpload } from '../../../../store/upload';
import { getActions } from '../../../../utils/utils';
import { Button } from '../../../common/button';
import { Title } from '../../../common/title';

interface IProps {
    navigation: Navigation;
}

export const Actions = observer(({ navigation }: IProps): ReactElement => {
    const upload = useStore<IUpload>(state => state.upload);
    const hashtags = useStore<IHashtags>(state => state.hashtags);

    const actions = getActions({ hashtags, upload, navigation });

    return (
        <>
            <Title>What next?</Title>
            <Button icon="copy-outline" onPress={actions.copy}>
                Copy all active hashtags
            </Button>
            <View style={styles.separator} />
            <Button icon="ios-document-text-outline" onPress={actions.edit}>
                Add description or cite
            </Button>
            <View style={styles.separator} />
            <Button icon="ios-share-outline" onPress={actions.share}>
                Share this post
            </Button>
            <View style={styles.separator} />
            <Button icon="ios-save-outline" onPress={actions.save}>
                Save results
            </Button>
        </>
    );
});

const styles = StyleSheet.create({
    separator: {
        marginTop: 20,
    },
});
