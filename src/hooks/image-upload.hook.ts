import { nanoid } from 'nanoid/non-secure';

import firebase from '../firebase';

type VisionRun = (url: string) => Promise<string | void>;

export const useImageUpload = (): VisionRun => {
    return async (uri: string): Promise<string | void> => {
        const blob: Blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => resolve(xhr.response);
            xhr.onerror = () => reject(new TypeError('Network request failed'));
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        });

        const ref = firebase.storage().ref().child(nanoid());
        const snapshot = await ref.put(blob);

        return await snapshot.ref.getDownloadURL();
    };
};
