import { Alert } from 'react-native';

import { IVisionBody } from '../interfaces';

export const api = {
    vision: async (body: IVisionBody): Promise<any | void> => {
        try {
            const bodyJson = JSON.stringify(body);
            return await fetch(
                'https://vision.googleapis.com/v1/images:annotate?key=' + process.env.GOOGLE_CLOUD_VISION_API_KEY,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: bodyJson,
                },
            ).then(data => data.json());
        } catch (error) {
            Alert.alert(error);
        }
    },
};
