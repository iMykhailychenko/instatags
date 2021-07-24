import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../../theme';

interface IProps {
    children: string;
}

export const Separator = ({ children }: IProps): ReactElement => (
    <View style={styles.root}>
        <View style={styles.border} />
        <Text style={styles.text}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    border: {
        borderTopWidth: 1,
        borderColor: Colors.gray300,
    },
    text: {
        position: 'absolute',
        top: -10,
        alignSelf: 'center',
        width: 'auto',
        padding: 30,
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 16,
        textTransform: 'capitalize',
        backgroundColor: Colors.white,
        color: Colors.blue700,
    },
});
