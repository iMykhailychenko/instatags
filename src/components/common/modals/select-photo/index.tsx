import React, { ReactElement } from 'react';
import {
    Alert,
    GestureResponderEvent,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { launchCamera } from 'react-native-image-picker/src/index';

import { useColors } from '../../../../hooks/colors.hook';
import { useImageUpload } from '../../../../hooks/image-upload.hook';
import { useStore } from '../../../../hooks/store.hook';
import { Navigation } from '../../../../interfaces';
import { IUpload } from '../../../../store/upload';

interface IProps {
    navigation: Navigation;
    visible: boolean;
    onClose: () => void;
}

export const SelectedPhoto = ({ visible, onClose, navigation }: IProps): ReactElement => {
    const colors = useColors();
    const imageUpload = useImageUpload();
    const upload = useStore<IUpload>(state => state.upload);

    const handleBackdrop = (event: GestureResponderEvent): void => {
        if (event.target === event.currentTarget) onClose();
    };

    const handleCamera = async () => {
        onClose();
        launchCamera({ mediaType: 'photo' }, async (response: ImagePickerResponse): Promise<void> => {
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
        onClose();
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

    return (
        <Modal animationType="fade" visible={visible} transparent onRequestClose={onClose}>
            <Pressable onPress={handleBackdrop} style={styles.container}>
                <View style={{ ...styles.modal, backgroundColor: colors.white }}>
                    <TouchableOpacity onPress={onClose}>
                        <View style={styles.button}>
                            <Text style={{ ...styles.buttonText, color: colors.blue700 }}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCamera} style={styles.box}>
                        <Text style={{ ...styles.text, color: colors.blue700 }}>Take a photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGallery} style={styles.box}>
                        <Text style={{ ...styles.text, color: colors.blue700 }}>Select from gallery</Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modal: {
        position: 'absolute',
        width: '94%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    box: {
        justifyContent: 'center',
        height: 50,
        width: '100%',
        borderRadius: 10,
        borderBottomWidth: 1,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
    },
    button: {
        width: '100%',
        flexDirection: 'row',
    },
    buttonText: {
        flex: 2,
        marginBottom: 30,
        fontSize: 16,
    },
});
