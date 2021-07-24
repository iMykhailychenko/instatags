import React, { ReactElement } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useColors } from '../../../hooks/colors.hook';
import { IAdaptedHashtag } from '../../../interfaces';

interface IProps {
    file: string;
    tags: IAdaptedHashtag[];
}

export const ShareInstagramButton = ({ file: url, tags }: IProps): ReactElement => {
    const colors = useColors();

    const message = tags.reduce((acc, item) => (acc += item.active ? ` #${item.tag}` : ''), '')?.trim();

    const handleClick = async (): Promise<void> => {
        try {
            await Share.shareSingle({
                url,
                message,
                title: message,
                subject: message,
                social: Share.Social.INSTAGRAM,
                forceDialog: true,

                // url?: string;
                // type?: string;
                // filename?: string;
                // message?: string;
                // title: string;
                // subject?: string;
                // email?: string;
                // recipient?: string;
                // social: Exclude<Social, Social.FacebookStories | Social.InstagramStories>;
                // forceDialog?: boolean;
            });
        } catch (error) {
            Alert.alert(error?.message);
        }
    };

    return (
        <Icon.Button
            size={25}
            name="ios-share"
            color={colors.blue700}
            underlayColor="transparent"
            backgroundColor="transparent"
            onPress={handleClick}
        >
            <Text style={{ ...styles.text, color: colors.blue700 }}>Share this post to instagram</Text>
        </Icon.Button>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 2,
        fontSize: 16,
        fontWeight: '500',
    },
});
