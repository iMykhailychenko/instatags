import { observer } from 'mobx-react';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useColors } from '../../../hooks/colors.hook';
import { useStore } from '../../../hooks/store.hook';
import { Navigation } from '../../../interfaces';
import { IUpload } from '../../../store/upload';

const options: ImageLibraryOptions = { mediaType: 'photo' };

interface IProps {
    navigation: Navigation;
}

export const ImgUpload = observer(({ navigation }: IProps): ReactElement => {
    const colors = useColors();
    const upload = useStore<IUpload>(state => state.upload);

    const handlePhotos = async () => {
        launchImageLibrary(options, async (response: ImagePickerResponse): Promise<void> => {
            await upload.add(response);
            navigation.navigate('Tags');
        });
    };

    return (
        <TouchableOpacity onPress={handlePhotos}>
            <View style={{ ...styles.button, backgroundColor: colors.red700 }}>
                <Icon name="image-search" style={styles.icon} />
                <Text style={styles.text}>Select the photo for your instagram post</Text>
            </View>
        </TouchableOpacity>
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
