import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { ActionSheetIOS, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { launchCamera } from 'react-native-image-picker/src/index';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useColors } from '../../../hooks/colors.hook';
import { useImageUpload } from '../../../hooks/image-upload.hook';
import { useStore } from '../../../hooks/store.hook';
import { Navigation } from '../../../interfaces';
import { IUpload } from '../../../store/upload';

interface IProps {
    navigation: Navigation;
}

export const ImgUpload = observer(({ navigation }: IProps): ReactElement => {
    const colors = useColors();
    const imageUpload = useImageUpload();
    const upload = useStore<IUpload>(state => state.upload);

    const handleCamera = async () => {
        launchCamera({ mediaType: 'photo', cameraType: 'front' }, async (response: ImagePickerResponse): Promise<void> => {
            if (response?.assets?.[0]?.uri) {
                const uri = await imageUpload(response?.assets?.[0]?.uri);
                await upload.add(uri);
                navigation.navigate('Tags');
            } else {
                Alert.alert('Camera unavailable');
            }
        });
    };

    const handleGallery = async () => {
        launchImageLibrary({ mediaType: 'photo' }, async (response: ImagePickerResponse): Promise<void> => {
            if (response?.assets?.[0]?.uri) {
                const uri = await imageUpload(response?.assets?.[0]?.uri);
                await upload.add(uri);
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
                <View style={{ ...styles.button, backgroundColor: colors.red700 }}>
                    <Icon name="image-search" style={styles.icon} />
                    <Text style={styles.text}>Select the photo for your instagram post</Text>
                </View>
            </TouchableOpacity>
        </>
    );
});

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 240,
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    text: {
        maxWidth: 180,
        textAlign: 'center',
        fontSize: 18,
        color: '#ffffff',
    },
    icon: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 35,
        color: '#ffffff',
    },
});
