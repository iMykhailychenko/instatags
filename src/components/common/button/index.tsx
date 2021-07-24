import React, { ReactElement } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    size?: number;
    icon: string;
    onPress: () => void;
}

export const ButtonSmall = ({ size = 25, icon, onPress }: IButtonSmallProps): ReactElement => (
    <TouchableOpacity onPress={onPress}>
        <Icon size={size} name={icon} color={Colors.blue700} />
    </TouchableOpacity>
);

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
