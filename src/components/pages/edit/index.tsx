import { observer } from 'mobx-react';
import React, { ReactElement, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { useStore } from '../../../hooks/store.hook';
import { IHashtags } from '../../../store/hashtags';
import { Colors } from '../../../theme';
import { UploadedMediaSmall } from '../../common/uploaded-media';

export const Edit = observer((): ReactElement => {
    const hashtags = useStore<IHashtags>(state => state.hashtags);
    const message = hashtags.tags.reduce((acc, item) => (acc += item.active ? ` #${item.tag}` : ''), '')?.trim();
    const [text, setText] = useState(message);

    return (
        <View style={styles.root}>
            <UploadedMediaSmall />
            <TextInput style={styles.input} onChangeText={setText} value={text} multiline autoFocus />
        </View>
    );
});

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    input: {
        flex: 1,
        maxHeight: '40%',
        padding: 15,
        fontSize: 16,
        lineHeight: 30,
        borderColor: Colors.gray200,
        borderWidth: 1,
    },
});
