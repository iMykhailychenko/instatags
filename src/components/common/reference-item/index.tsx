import React, { ReactElement } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Navigation, NavigationParams, Pages } from '../../../interfaces';
import { Colors } from '../../../theme';

interface IProps {
    children: string;
    navigation: Navigation;
    navigateParams?: [Pages, NavigationParams] | [Pages];
}

export const ReferenceItem = ({ children, navigation, navigateParams = ['Home'] }: IProps): ReactElement => (
    <TouchableOpacity onPress={() => navigation.navigate(...navigateParams)}>
        <View style={styles.button}>
            <Text style={styles.text}>{children}</Text>
            <Icon style={styles.icon} name="arrow-forward-ios" />
        </View>
    </TouchableOpacity>
);

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
        color: Colors.dark,
    },
    icon: {
        right: 0,
        fontSize: 20,
        color: Colors.blue700,
    },
});
