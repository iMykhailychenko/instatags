import React, { ReactElement } from 'react';
import { View } from 'react-native';

import { Navigation, NavigationParams, Pages } from '../../../interfaces';
import { ImgUpload } from '../../common/image-upload';
import { ReferenceItem } from '../../common/reference-item';
import { Separator } from '../../common/separator';
import { Container } from '../../layout/container';

interface IReferences {
    page: Pages;
    text: string;
    params: NavigationParams;
}

const references: IReferences[] = [
    {
        page: 'Synonyms',
        text: 'Generate hashtags by synonyms words',
        params: undefined,
    },
    {
        page: 'Estimate',
        text: 'Estimate how many likes a post will get',
        params: undefined,
    },
    {
        page: 'Cites',
        text: 'Search cites for your post',
        params: undefined,
    },
];

interface IProps {
    navigation: Navigation;
}

export const Home = ({ navigation }: IProps): ReactElement => {
    return (
        <Container>
            <>
                <ImgUpload navigation={navigation} />

                <Separator>or</Separator>
                <View style={{ marginBottom: 40 }}>
                    {references.map<ReactElement>(route => (
                        <ReferenceItem key={route.page} navigation={navigation} navigateParams={[route.page, route.params]}>
                            {route.text}
                        </ReferenceItem>
                    ))}
                </View>

                <Separator>recent actions</Separator>
            </>
        </Container>
    );
};
