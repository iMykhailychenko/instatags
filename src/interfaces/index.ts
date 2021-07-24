import { StackNavigationProp } from '@react-navigation/stack';

export type NavigationParams = undefined;

export type RootStackParamList = {
    Home: NavigationParams;
    Tags: NavigationParams;
    Synonyms: NavigationParams;
    Cites: NavigationParams;
    Estimate: NavigationParams;
    Edit: NavigationParams;
};

export type Pages = 'Home' | 'Tags' | 'Synonyms' | 'Cites' | 'Estimate' | 'Edit';

export type Navigation = StackNavigationProp<RootStackParamList, Pages>;

export interface IVisionBody {
    requests: [
        {
            features: { type: string; maxResults: number }[];
            image: { source: { imageUri: string } };
        },
    ];
}

export interface IVisionResponse {
    responses: {
        logoAnnotations?: {
            mid: string;
            description: string;
            score: number;
            boundingPoly: { vertices: { x?: number; y?: number }[] };
        }[];
        labelAnnotations?: {
            mid: string;
            description: string;
            score: number;
            topicality: number;
        }[];
        imagePropertiesAnnotation?: {
            dominantColors: {
                colors: {
                    color: { red: number; green: number; blue: number };
                    score: number;
                    pixelFraction: number;
                }[];
            };
        };
        cropHintsAnnotation?: {
            cropHints?: {
                boundingPoly: { vertices: { x?: number; y?: number }[] };
                confidence: number;
                importanceFraction: number;
            }[];
        };
    }[];
}

export interface IAdaptedHashtag {
    tag: string;
    active: boolean;
}
