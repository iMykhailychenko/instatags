import React, { ReactElement } from 'react';
import { Alert, NativeModules, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { IAdaptedHashtag } from '../../../interfaces';
import { Colors } from '../../../theme';

interface IProps {
    file: string;
    tags: IAdaptedHashtag[];
}

export const ShareInstagramButton = ({ file: url, tags }: IProps): ReactElement => {
    const message = tags.reduce((acc, item) => (acc += item.active ? ` #${item.tag}` : ''), '')?.trim();

    const handleClick = async (): Promise<void> => {
        const options = {
            urls: [url],
            message,
            title: message,
            subject: message,
            caption: message,
        };

        try {
            NativeModules.RNShare.open(
                options,
                () => {
                    throw new Error();
                },
                console.log,
            );
        } catch (error) {
            Alert.alert(error?.message);
        }
    };

    return (
        <Icon.Button
            size={25}
            name="ios-share"
            color={Colors.blue700}
            underlayColor="transparent"
            backgroundColor="transparent"
            onPress={handleClick}
        >
            <Text style={styles.text}>Share this post to instagram</Text>
        </Icon.Button>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 2,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.blue700,
    },
});
