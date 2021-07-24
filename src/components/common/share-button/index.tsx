import React, { ReactElement } from 'react';
import { Alert, Platform, StyleSheet, Text } from 'react-native';
import Share from 'react-native-share';
import { ShareOptions } from 'react-native-share/src/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useColors } from '../../../hooks/colors.hook';
import { IAdaptedHashtag } from '../../../interfaces';

interface IProps {
    file: string;
    tags: IAdaptedHashtag[];
}

export const ShareButton = ({ file: url, tags }: IProps): ReactElement => {
    const colors = useColors();

    const title = 'title';
    const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
    const message = tags.reduce((acc, item) => (acc += item.active ? ` #${item.tag}` : ''), '')?.trim();

    const options = Platform.select({
        ios: {
            activityItemSources: [
                {
                    // For sharing url with custom title.
                    placeholderItem: { type: 'url', content: url },
                    item: {
                        default: { type: 'url', content: url },
                    },
                    subject: {
                        default: title,
                    },
                    linkMetadata: { originalUrl: url, url, title },
                },
                {
                    // For sharing text.
                    placeholderItem: { type: 'text', content: message },
                    item: {
                        default: { type: 'text', content: message },
                        message: null, // Specify no text to share via Messages app.
                    },
                    linkMetadata: {
                        // For showing app icon on share preview.
                        title: message,
                    },
                },
                {
                    // For using custom icon instead of default text icon at share preview when sharing with message.
                    placeholderItem: {
                        type: 'url',
                        content: icon,
                    },
                    item: {
                        default: {
                            type: 'text',
                            content: `${message} ${url}`,
                        },
                    },
                    linkMetadata: {
                        title: message,
                        icon: icon,
                    },
                },
            ],
        },
        default: {
            title,
            url,
            message,
            subject: title,
        },
    });

    const handleClick = async (): Promise<void> => {
        try {
            await Share.open(options as ShareOptions);
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
            <Text style={{ ...styles.text, color: colors.blue700 }}>Share this post</Text>
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
