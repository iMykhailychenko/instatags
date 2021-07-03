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
                        color: item.active ? colors.blue700 : colors.gray300,
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
                <>
                    <Text style={{ ...styles.text, color: colors.gray600 }}>
                        Select hashtags that you would apply to your instagram post
                    </Text>
                    <View style={styles.heading}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={async () => hashtags.toggleAll(true).catch(error => Alert.alert(error))}>
                                <Text style={{ ...styles.button, color: colors.blue700 }}>Select All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={async () => hashtags.toggleAll(false).catch(error => Alert.alert(error))}>
                                <Text style={{ ...styles.button, color: colors.blue700 }}>Unselect All</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ ...styles.total, color: colors.dark }}>
                            total: {hashtags.tags.filter(item => item.active).length}
                        </Text>
                    </View>
                    <View style={styles.tags}>
                        {hashtags.tags.map(tag => (
                            <HashtagsItems item={tag} key={tag.tag} />
                        ))}
                    </View>
                </>
            ) : null}
        </>
    );
});

const styles = StyleSheet.create({
    text: {
        marginBottom: 30,
        lineHeight: 30,
        fontSize: 16,
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 30,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    total: {
        fontSize: 16,
        lineHeight: 16,
    },
    button: {
        fontSize: 16,
        lineHeight: 16,
        marginRight: 20,
    },
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
