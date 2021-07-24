import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Colors } from '../../../theme';

interface IProps {
    children: string;
    icon: string;
    onPress: () => void;
}

export const Button = ({ icon, children, onPress }: IProps): ReactElement => {
    return (
        <Icon.Button
            size={25}
            name={icon}
            style={styles.button}
            color={Colors.blue700}
            underlayColor="transparent"
            backgroundColor="transparent"
            onPress={onPress}
        >
            <Text style={styles.text}>{children}</Text>
        </Icon.Button>
    );
};

interface IButtonSmallProps {
    icon: string;
    onPress: () => void;
}

export const ButtonSmall = ({ icon, onPress }: IButtonSmallProps): ReactElement => {
    return (
        <Icon.Button
            size={25}
            style={styles.button}
            name={icon}
            color={Colors.blue700}
            underlayColor="transparent"
            backgroundColor={Colors.blue100}
            onPress={onPress}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 4,
    },
    text: {
        marginTop: 3,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.blue700,
    },
});
