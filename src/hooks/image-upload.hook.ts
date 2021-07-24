// import { nanoid } from 'nanoid/non-secure';
//
// import firebase from '../firebase';

type VisionRun = (url: string) => Promise<string>;

export const useImageUpload = (): VisionRun => {
    return async (uri: string): Promise<string> => {
        // TEMP DEVELOPMENT
        // const blob: Blob = await new Promise((resolve, reject) => {
        //     const xhr = new XMLHttpRequest();
        //     xhr.onload = () => resolve(xhr.response);
        //     xhr.onerror = () => reject(new TypeError('Network request failed'));
        //     xhr.responseType = 'blob';
        //     xhr.open('GET', uri, true);
        //     xhr.send(null);
        // });
        //
        // const ref = firebase.storage().ref().child(nanoid());
        // const snapshot = await ref.put(blob);
        //
        // return await snapshot.ref.getDownloadURL();

        return await new Promise(res => {
            setTimeout(() => {
                return res(uri);
            }, 300);
        });
    };
};
