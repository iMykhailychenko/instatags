import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { ActionSheetIOS, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { launchCamera } from 'react-native-image-picker/src/index';

import { useImageUpload } from '../../../../hooks/image-upload.hook';
import { useStore } from '../../../../hooks/store.hook';
import { Navigation } from '../../../../interfaces';
import { ILoading } from '../../../../store/loader';
import { IUpload } from '../../../../store/upload';
import { Colors } from '../../../../theme';

interface IProps {
    navigation: Navigation;
}

export const ImgUpload = observer(({ navigation }: IProps): ReactElement => {
    const imageUpload = useImageUpload();

    const loading = useStore<ILoading>(state => state.loading);
    const upload = useStore<IUpload>(state => state.upload);

    const handleCamera = async () => {
        launchCamera({ mediaType: 'photo', cameraType: 'front' }, async (response: ImagePickerResponse): Promise<void> => {
            if (response?.assets?.[0]?.uri) {
                loading.start();
                await upload.addOriginalFile(response?.assets?.[0]?.uri);

                const uri = await imageUpload(response?.assets?.[0]?.uri);
                await upload.addServerUrl(uri);

                loading.end();
                navigation.navigate('Tags');
            } else {
                Alert.alert('Camera unavailable');
            }
        });
    };

    const handleGallery = async () => {
        launchImageLibrary({ mediaType: 'photo' }, async (response: ImagePickerResponse): Promise<void> => {
            if (response?.assets?.[0]?.uri) {
                loading.start();
                await upload.addOriginalFile(response?.assets?.[0]?.uri);

                const uri = await imageUpload(response?.assets?.[0]?.uri);
                await upload.addServerUrl(uri);

                loading.end();
                navigation.navigate('Tags');
            } else {
                Alert.alert('Gallery unavailable');
            }
        });
    };

    const toggle = (): void => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['Cancel', 'Take a photo', 'Select from gallery'],
                cancelButtonIndex: 0,
            },
            async index => {
                switch (index) {
                    case 1:
                        await handleCamera();
                        break;

                    case 2:
                        await handleGallery();
                        break;
                }
            },
        );
    };

    return (
        <>
            <TouchableOpacity onPress={toggle}>
                <View style={styles.button}>
                    <Text style={styles.text}>Hashtags from photo</Text>
                    <Text style={styles.sub}>Tab to start</Text>
                </View>
            </TouchableOpacity>
        </>
    );
});

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: Colors.red700,
    },
    text: {
        maxWidth: 200,
        textAlign: 'center',
        fontSize: 38,
        color: '#fff',
        fontWeight: '600',
    },
    sub: {
        maxWidth: 200,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
    },
});
