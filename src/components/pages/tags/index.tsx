import { observer } from 'mobx-react';
import React, { ReactElement, useEffect } from 'react';
import { Alert, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useColors } from '../../../hooks/colors.hook';
// import { useImageUpload } from '../../../hooks/image-upload.hook';
import { useStore } from '../../../hooks/store.hook';
import { IHashtags } from '../../../store/hashtags';
import { IUpload } from '../../../store/upload';
import { HashtagsList } from '../../common/hashtags-list';
import { Container } from '../../layout/container';

export const Tags = observer((): ReactElement => {
    const colors = useColors();
    // TEMP
    // const imageUpload = useImageUpload();

    const upload = useStore<IUpload>(state => state.upload);
    const hashtags = useStore<IHashtags>(state => state.hashtags);

    useEffect(() => {
        const publishPhotoToFirebase = async (uri: string): Promise<void> => {
            // const storedImageUrl = await imageUpload(uri).catch(error => Alert.alert(error));
            // if (storedImageUrl) await hashtags.run(storedImageUrl).catch(error => Alert.alert(error));

            // TEMP
            if (uri) await hashtags.run(uri).catch(error => Alert.alert(error));
        };

        if (upload.file) publishPhotoToFirebase(upload.file).catch(error => Alert.alert(error));

        return () => {
            hashtags.reset().catch(error => Alert.alert(error));
        };
    }, []);

    return (
        <Container>
            <>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('change img')}>
                    {upload.file ? (
                        <Image source={{ uri: upload.file } as ImageSourcePropType} style={styles.box} />
                    ) : (
                        <View style={{ ...styles.box, backgroundColor: colors.yellow100 }}>
                            <Text style={styles.text}>Tap to change image</Text>
                        </View>
                    )}
                </TouchableOpacity>
                <HashtagsList />
            </>
        </Container>
    );
});

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        height: 240,
    },
    button: {
        borderRadius: 10,
        marginBottom: 20,
    },
    text: {
        padding: 10,
        fontSize: 16,
    },
});
