import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { useStore } from '../../../hooks/store.hook';
import { ILoading } from '../../../store/loader';

export const FullPageLoader = observer((): ReactElement | null => {
    const loading = useStore<ILoading>(state => state.loading);

    return loading.status ? (
        <View style={styles.root}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
    ) : null;
});

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});
