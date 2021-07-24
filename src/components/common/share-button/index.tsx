import React, { ReactElement } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { IAdaptedHashtag } from '../../../interfaces';
import { Colors } from '../../../theme';

interface IProps {
    file: string;
    tags: IAdaptedHashtag[];
}

export const ShareButton = ({ file: url, tags }: IProps): ReactElement => {
    const title = 'Insta Tags #';
    const message = tags.reduce((acc, item) => (acc += item.active ? ` #${item.tag}` : ''), '')?.trim();

    const handleClick = async (): Promise<void> => {
        try {
            await Share.open({
                url,
                title,
                message,
                subject: title,
            });
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
            <Text style={styles.text}>Share this post</Text>
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
