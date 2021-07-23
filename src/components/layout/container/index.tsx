import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useColors } from '../../../hooks/colors.hook';

interface IProps {
    children: ReactElement | ReactElement[];
}

export const Container = ({ children }: IProps): ReactElement => {
    const color = useColors();
    return (
        <ScrollView style={{ ...styles.root, backgroundColor: color.white }}>
            {children}
            <View style={styles.intend} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
    },
    intend: {
        marginBottom: 180,
    },
});
