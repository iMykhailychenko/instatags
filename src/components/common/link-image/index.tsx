import React, { ReactElement } from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Navigation, NavigationParams, Pages } from '../../../interfaces';

interface IProps {
    uri: ImageSourcePropType;
    title: string;
    text: string;
    navigation: Navigation;
    navigateParams?: [Pages, NavigationParams] | [Pages];
}

export const LinkImage = ({ uri, title, text, navigation, navigateParams = ['Home'] }: IProps): ReactElement => (
    <TouchableOpacity onPress={() => navigation.navigate(...navigateParams)}>
        <ImageBackground source={uri} resizeMode="cover" style={styles.box}>
            <View style={styles.backdrop} />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.sub}>{text}</Text>
        </ImageBackground>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    box: {
        position: 'relative',
        display: 'flex',
        minHeight: 150,
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    text: {
        maxWidth: '50%',
        marginBottom: 10,
        fontSize: 22,
        color: '#fff',
        fontWeight: '500',
    },
    sub: {
        maxWidth: '50%',
        fontSize: 14,
        color: '#fff',
        fontWeight: '500',
        opacity: 0.6,
    },
});
