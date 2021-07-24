import { Alert, Clipboard } from 'react-native';
import Share from 'react-native-share';

import { Navigation } from '../interfaces';
import { IHashtags } from '../store/hashtags';
import { IUpload } from '../store/upload';

export interface IParams {
    upload: IUpload;
    hashtags: IHashtags;
    navigation?: Navigation;
}

export interface Actions {
    share: () => Promise<void>;
    copy: () => void;
    edit: () => void;
    save: () => void;
}

export const getActions = ({ upload, hashtags, navigation }: IParams): Actions => {
    const url = upload.original as string;
    const message = hashtags.tags.reduce((acc, item) => (acc += item.active ? ` #${item.tag}` : ''), '')?.trim();
    const title = 'Insta Tags #';

    return {
        share: async (): Promise<void> => {
            try {
                await Share.open({
                    url,
                    title,
                    message,
                    subject: title,
                });
            } catch (error) {
                Alert.alert(error?.message);
            }
        },

        copy: (): void => {
            Clipboard.setString(message);
            Alert.alert('Hashtags successfully copied!');
        },

        edit: (): void => {
            if (navigation) navigation.navigate('Edit');
        },

        save: (): void => {
            Alert.alert('Post successfully saved!');
        },
    };
};
