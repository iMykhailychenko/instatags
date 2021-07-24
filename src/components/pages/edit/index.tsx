import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../../theme';
import { DateComponent } from '../../common/date';
import { Container } from '../../layout/container';

export const Edit = (): ReactElement => (
    <Container>
        <DateComponent />
        <View style={styles.root}>
            <Text style={styles.text}>Coming soon ...</Text>
        </View>
    </Container>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 240,
        backgroundColor: Colors.green100,
    },
    text: {
        padding: 10,
        fontSize: 20,
    },
});
