import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { useStore } from '../../../hooks/store.hook';
import { IHashtags } from '../../../store/hashtags';
import { IUpload } from '../../../store/upload';
import { Colors } from '../../../theme';
import { getActions } from '../../../utils/utils';
import { ButtonSmall } from '../button';

export const UploadedMedia = observer((): ReactElement => {
    const upload = useStore<IUpload>(state => state.upload);

    return (
        <View style={styles.wrp}>
            {upload.original ? (
                <Image source={{ uri: upload.original } as ImageSourcePropType} style={styles.box} />
            ) : (
                <View style={styles.box}>
                    <Text style={styles.text}>Loading ...</Text>
                </View>
            )}
        </View>
    );
});

export const UploadedMediaSmall = observer((): ReactElement => {
    const upload = useStore<IUpload>(state => state.upload);
    const hashtags = useStore<IHashtags>(state => state.hashtags);

    const actions = getActions({ hashtags, upload });

    return (
        <View style={small.wrp}>
            <Image source={{ uri: upload.original } as ImageSourcePropType} style={small.box} />
            <View style={small.buttons}>
                <ButtonSmall icon="ios-share-outline" onPress={actions.share} />
                <View style={small.separator} />
                <ButtonSmall size={22} icon="ios-save-outline" onPress={actions.save} />
            </View>
        </View>
    );
});

const small = StyleSheet.create({
    wrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 6,
    },
    separator: {
        marginLeft: 25,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        height: 60,
        width: 100,
        backgroundColor: Colors.yellow100,
    },
});

const styles = StyleSheet.create({
    wrp: {
        borderRadius: 10,
        marginBottom: 20,
    },
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
    text: {
        padding: 10,
        fontSize: 16,
    },
});
