import React, { ReactElement } from 'react';
import { Alert, Share, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useColors } from '../../../hooks/colors.hook';
import { IAdaptedHashtag } from '../../../interfaces';

interface IProps {
    file: string;
    tags: IAdaptedHashtag[];
}

export const ShareButton = ({ file, tags }: IProps): ReactElement => {
    const colors = useColors();

    const handleClick = async (): Promise<void> => {
        try {
            const result = await Share.share({
                url: file,
                message: tags.reduce((acc, item) => (acc += item.active ? ` #${item.tag}` : ''), '')?.trim(),
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
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
