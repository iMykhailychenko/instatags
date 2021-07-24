import React, { ReactElement } from 'react';
import { StyleSheet, Text } from 'react-native';

interface IProps {
    children: string;
}

export const Title = ({ children }: IProps): ReactElement => <Text style={styles.title}>{children}</Text>;

const styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        fontSize: 30,
        fontWeight: '700',
    },
});
