import { ImageSourcePropType } from 'react-native';

import { NavigationParams, Pages } from '../../../interfaces';

export interface IReferences {
    page: Pages;
    uri: ImageSourcePropType;
    text: string;
    title: string;
    params: NavigationParams;
}

export const references: IReferences[] = [
    {
        page: 'Synonyms',
        uri: require('../../../static/1.jpeg'),
        title: 'Synonyms',
        text: 'Generate hashtags by synonyms words',
        params: undefined,
    },
    {
        page: 'Estimate',
        uri: require('../../../static/2.jpeg'),
        title: 'Estimate',
        text: 'Estimate how many likes a post will get',
        params: undefined,
    },
    {
        page: 'Cites',
        uri: require('../../../static/3.jpeg'),
        title: 'Cites',
        text: 'Search cites for your post',
        params: undefined,
    },
];
