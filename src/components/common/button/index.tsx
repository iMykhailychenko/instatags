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
        <View style={styles.root}>
            <Icon.Button
                size={25}
                name={icon}
                color={Colors.blue700}
                underlayColor="transparent"
                backgroundColor={Colors.blue100}
                onPress={onPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        width: 40,
    },
    text: {
        marginTop: 3,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.blue700,
    },
});
