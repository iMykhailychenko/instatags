import firebase from 'firebase';
import { v4 as uuid } from 'uuid';

type VisionRun = (url: string) => Promise<void>;

export const useImageUpload = (): VisionRun => {
    return async (url: string): Promise<void> => {
        const blob: Blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => resolve(xhr.response);
            xhr.onerror = () => reject(new TypeError('Network request failed'));
            xhr.responseType = 'blob';
            xhr.open('GET', url, true);
            xhr.send(null);
        });

        const ref = firebase.storage().ref().child(uuid());
        const snapshot = await ref.put(blob);

        return await snapshot.ref.getDownloadURL();
    };
};
