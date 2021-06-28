import { Alert } from 'react-native';

import { env } from '../../env';
import { IVisionBody, IVisionResponse } from '../interfaces';

export const api = {
    vision: async (url: string): Promise<IVisionResponse | void> => {
        try {
            const body: IVisionBody = {
                requests: [
                    {
                        features: [
                            { type: 'LABEL_DETECTION', maxResults: 40 },
                            { type: 'IMAGE_PROPERTIES', maxResults: 40 },
                            { type: 'LOGO_DETECTION', maxResults: 40 },
                            // EXTRA
                            // { type: 'FACE_DETECTION', maxResults: 5 },
                            // { type: 'TEXT_DETECTION', maxResults: 5 },
                            // { type: 'DOCUMENT_TEXT_DETECTION', maxResults: 5 },
                            // { type: 'WEB_DETECTION', maxResults: 5 },
                            // { type: 'LANDMARK_DETECTION', maxResults: 5 },
                            // { type: 'SAFE_SEARCH_DETECTION', maxResults: 5 },
                            // { type: 'CROP_HINTS', maxResults: 5 },
                        ],
                        image: {
                            source: {
                                imageUri: url,
                            },
                        },
                    },
                ],
            };

            const bodyJson = JSON.stringify(body);
            return await fetch('https://vision.googleapis.com/v1/images:annotate?key=' + env.GOOGLE_CLOUD_VISION_API_KEY, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: bodyJson,
            }).then(data => data.json());
        } catch (error) {
            Alert.alert(error);
        }
    },
};
