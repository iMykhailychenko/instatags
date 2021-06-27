import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useColors } from '../../../hooks/colors.hook';
import { useStore } from '../../../hooks/store.hook';
import { Navigation } from '../../../interfaces';
import { IUpload } from '../../../store/upload';
import { Container } from '../../layout/container';

interface IProps {
    navigation: Navigation;
}
export const Tags = observer((): ReactElement => {
    const colors = useColors();
    const upload = useStore<IUpload>(state => state.upload);

    return (
        <Container>
            <View style={{ ...styles.root, backgroundColor: colors.yellow100 }}>
                <Text style={styles.text}>{upload.file?.assets?.[0]?.uri}</Text>
            </View>
        </Container>
    );
});

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 240,
    },
    text: {
        padding: 10,
    },
});
