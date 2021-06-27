import React, { ReactElement } from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useColors } from '../../../hooks/colors.hook';
import { Navigation } from '../../../interfaces';

interface IProps {
    navigation: Navigation;
}

export const GoHome = ({ navigation }: IProps): ReactElement => {
    const colors = useColors();

    return (
        <Icon.Button
            name="arrow-back-ios"
            color={colors.blue700}
            size={18}
            style={styles.root}
            backgroundColor="transparent"
            onPress={() => navigation.navigate('Home')}
        >
            <Text style={{ ...styles.text, color: colors.blue700 }}>Back</Text>
        </Icon.Button>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'flex-end',
    },
    text: {
        marginTop: 12,
        fontSize: 18,
    },
});
