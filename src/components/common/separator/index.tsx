import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useColors } from '../../../hooks/colors.hook';

interface IProps {
    children: string;
}

export const Separator = ({ children }: IProps): ReactElement => {
    const colors = useColors();
    return (
        <View style={styles.root}>
            <View style={{ ...styles.border, borderColor: colors.gray300 }} />
            <Text style={{ ...styles.text, backgroundColor: colors.white, color: colors.blue700 }}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    border: {
        borderTopWidth: 1,
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
    },
});