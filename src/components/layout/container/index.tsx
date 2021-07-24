import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Colors } from '../../../theme';

interface IProps {
    children: ReactElement | ReactElement[];
}

export const Container = ({ children }: IProps): ReactElement => (
    <ScrollView style={styles.root}>
        {children}
        <View style={styles.intend} />
    </ScrollView>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
        backgroundColor: Colors.white,
    },
    intend: {
        marginBottom: 180,
    },
});
