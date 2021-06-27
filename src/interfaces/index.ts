import { StackNavigationProp } from '@react-navigation/stack';

export type NavigationParams = undefined;

export type RootStackParamList = {
    Home: NavigationParams;
    Tags: NavigationParams;
    Synonyms: NavigationParams;
    Cites: NavigationParams;
    Estimate: NavigationParams;
};

export type Pages = 'Home' | 'Tags' | 'Synonyms' | 'Cites' | 'Estimate';

export type Navigation = StackNavigationProp<RootStackParamList, Pages>;

export interface IVisionBody {
    requests: [
        {
            features: { type: string; maxResults: number }[];
            image: {
                source: {
                    imageUri: Blob;
                };
            };
        },
    ];
}

export interface IVisionResponse {
    labelAnnotations: {
        description: string;
        mid: string;
        score: number;
        topicality: number;
    }[];
}
