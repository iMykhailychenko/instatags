import { observer } from 'mobx-react';
import React, { ReactElement, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useColors } from '../../../hooks/colors.hook';
import { Navigation } from '../../../interfaces';
import { SelectedPhoto } from '../modals/select-photo';

interface IProps {
    navigation: Navigation;
}

export const ImgUpload = observer(({ navigation }: IProps): ReactElement => {
    const colors = useColors();

    const [visible, setVisible] = useState<boolean>(false);
    const toggle = (): void => setVisible(prev => !prev);

    return (
        <>
            <SelectedPhoto visible={visible} onClose={toggle} navigation={navigation} />
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
