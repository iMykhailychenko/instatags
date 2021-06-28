import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useColors } from '../../../hooks/colors.hook';
import { useStore } from '../../../hooks/store.hook';
import { IAdaptedHashtag } from '../../../interfaces';
import { IHashtags } from '../../../store/hashtags';

interface IProps {
    item: IAdaptedHashtag;
}

const HashtagsItems = observer(({ item }: IProps): ReactElement => {
    const colors = useColors();
    const hashtags = useStore<IHashtags>(state => state.hashtags);

    const toggleActiveTag = async (): Promise<void> => {
        await hashtags.toggle(item.tag).catch(error => Alert.alert(error));
    };

    return (
        <TouchableOpacity onPress={toggleActiveTag}>
            <View style={{ ...styles.tag, backgroundColor: item.active ? colors.blue100 : colors.gray100 }}>
                <Text
                    style={{
                        ...styles.tagText,
                        color: item.active ? colors.blue700 : colors.gray500,
                    }}
                >
                    {`#${item.tag}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
});

export const HashtagsList = observer((): ReactElement => {
    const colors = useColors();
    const hashtags = useStore<IHashtags>(state => state.hashtags);

    return (
        <>
            {hashtags.loading && !hashtags.tags.length ? <ActivityIndicator size="small" color={colors.blue700} /> : null}
            {hashtags.tags.length ? (
                <View style={styles.tags}>
                    {hashtags.tags.map(tag => (
                        <HashtagsItems item={tag} key={tag.tag} />
                    ))}
                </View>
            ) : null}
        </>
    );
});

const styles = StyleSheet.create({
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        marginRight: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    tagText: {
        fontSize: 16,
    },
});
