import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { useStore } from '../../../hooks/store.hook';
import { IUpload } from '../../../store/upload';
import { Colors } from '../../../theme';
import { DateComponentSmall } from '../date';

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

    return (
        <View style={small.wrp}>
            <DateComponentSmall />
            <Image source={{ uri: upload.original } as ImageSourcePropType} style={small.box} />
        </View>
    );
});

const small = StyleSheet.create({
    wrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 6,
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
