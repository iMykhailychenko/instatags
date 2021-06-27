import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useColors } from '../../../hooks/colors.hook';
import { Container } from '../../layout/container';

export const Cites = (): ReactElement => {
    const colors = useColors();
    return (
        <Container>
            <View style={{ ...styles.root, backgroundColor: colors.green100 }}>
                <Text style={styles.text}>Coming soon ...</Text>
            </View>
        </Container>
    );
};

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
