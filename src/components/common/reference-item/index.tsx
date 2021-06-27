import React, { ReactElement } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useColors } from '../../../hooks/colors.hook';
import { Navigation, NavigationParams, Pages } from '../../../interfaces';

interface IProps {
    children: string;
    navigation: Navigation;
    navigateParams?: [Pages, NavigationParams] | [Pages];
}

export const ReferenceItem = ({ children, navigation, navigateParams = ['Home'] }: IProps): ReactElement => {
    const colors = useColors();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(...navigateParams)}>
            <View style={styles.button}>
                <Text style={{ ...styles.text, color: colors.dark }}>{children}</Text>
                <Icon style={{ ...styles.icon, color: colors.blue700 }} name="arrow-forward-ios" />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingTop: 20,
        paddingBottom: 20,
    },
    text: {
        flex: 2,
        paddingRight: 40,
        fontSize: 16,
    },
    icon: {
        right: 0,
        fontSize: 20,
    },
});
