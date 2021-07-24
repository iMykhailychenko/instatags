import React, { ReactElement } from 'react';
import { StyleSheet, Text } from 'react-native';
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
            color={Colors.blue700}
            underlayColor="transparent"
            backgroundColor="transparent"
            onPress={onPress}
        >
            <Text style={styles.text}>{children}</Text>
        </Icon.Button>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 3,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.blue700,
    },
});
