import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useStore } from '../../../../hooks/store.hook';
import { IAdaptedHashtag } from '../../../../interfaces';
import { IHashtags } from '../../../../store/hashtags';
import { Colors } from '../../../../theme';
import { Title } from '../../../common/title';

interface IProps {
    item: IAdaptedHashtag;
}

const HashtagsItems = observer(({ item }: IProps): ReactElement => {
    const hashtags = useStore<IHashtags>(state => state.hashtags);

    const toggleActiveTag = async (): Promise<void> => {
        await hashtags.toggle(item.tag).catch(error => Alert.alert(error));
    };

    return (
        <TouchableOpacity onPress={toggleActiveTag}>
            <View style={{ ...styles.tag, backgroundColor: item.active ? Colors.blue100 : Colors.gray100 }}>
                <Text
                    style={{
                        ...styles.tagText,
                        color: item.active ? Colors.blue700 : Colors.gray300,
                    }}
                >
                    {`#${item.tag}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
});

export const HashtagsList = observer((): ReactElement => {
    const hashtags = useStore<IHashtags>(state => state.hashtags);

    return (
        <>
            {hashtags.loading && !hashtags.tags.length ? <ActivityIndicator size="large" color={Colors.blue700} /> : null}
            {hashtags.tags.length ? (
                <>
                    <Title>Select hashtags</Title>
                    <View style={styles.heading}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={async () => hashtags.toggleAll(true).catch(error => Alert.alert(error))}>
                                <Text style={styles.button}>Select All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={async () => hashtags.toggleAll(false).catch(error => Alert.alert(error))}>
                                <Text style={styles.button}>Unselect All</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.total}>total: {hashtags.tags.filter(item => item.active).length}</Text>
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
        color: Colors.dark,
    },
    button: {
        marginRight: 20,
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '500',
        color: Colors.blue700,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 40,
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
