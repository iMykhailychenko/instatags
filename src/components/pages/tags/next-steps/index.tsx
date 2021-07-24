import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { Alert, Clipboard, StyleSheet, View } from 'react-native';
import Share from 'react-native-share';

import { useStore } from '../../../../hooks/store.hook';
import { Navigation } from '../../../../interfaces';
import { IHashtags } from '../../../../store/hashtags';
import { IUpload } from '../../../../store/upload';
import { Button } from '../../../common/button';
import { Title } from '../../../common/title';

interface IProps {
    navigation: Navigation;
}

export const Actions = observer(({ navigation }: IProps): ReactElement => {
    const upload = useStore<IUpload>(state => state.upload);
    const hashtags = useStore<IHashtags>(state => state.hashtags);

    const url = upload.original as string;
    const title = 'Insta Tags #';
    const message = hashtags.tags.reduce((acc, item) => (acc += item.active ? ` #${item.tag}` : ''), '')?.trim();

    const share = async (): Promise<void> => {
        try {
            await Share.open({
                url,
                title,
                message,
                subject: title,
            });
        } catch (error) {
            Alert.alert(error?.message);
        }
    };

    const copy = (): void => {
        Clipboard.setString(message);
        Alert.alert('Hashtags successfully copied!');
    };

    const edit = (): void => {
        navigation.navigate('Edit');
    };

    const save = (): void => {
        Alert.alert('Post successfully saved!');
    };

    return (
        <>
            <Title>What next?</Title>
            <Button icon="copy-outline" onPress={copy}>
                Copy all active hashtags
            </Button>
            <View style={styles.separator} />
            <Button icon="ios-document-text-outline" onPress={edit}>
                Add description or cite
            </Button>
            <View style={styles.separator} />
            <Button icon="ios-share-outline" onPress={share}>
                Share this post
            </Button>
            <View style={styles.separator} />
            <Button icon="ios-save-outline" onPress={save}>
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
