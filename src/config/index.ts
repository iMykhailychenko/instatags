import { env } from '../../env';

export const config = {
    firebase: {
        apiKey: env.API_KEY,
        authDomain: env.AUTH_DOMAIN,
        projectId: env.PROJECT_ID,
        storageBucket: env.STORAGE_BUCKET,
        messagingSenderId: env.MESSAGING_SENDER_ID,
        appId: env.APP_ID,
        measurementId: env.MEASUREMENT_ID,
    },
    visionApiKey: env.GOOGLE_CLOUD_VISION_API_KEY,
};
