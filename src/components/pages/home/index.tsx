import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

import { Navigation } from '../../../interfaces';
import { DateComponent } from '../../common/date';
import { LinkImage } from '../../common/link-image';
import { Separator } from '../../common/separator';
import { Container } from '../../layout/container';
import { references } from './home.config';
import { ImgUpload } from './image-upload';

interface IProps {
    navigation: Navigation;
}

export const Home = ({ navigation }: IProps): ReactElement => (
    <Container>
        <>
            <DateComponent />

            <ImgUpload navigation={navigation} />
            <Separator>or</Separator>

            <View style={styles.list}>
                {references.map<ReactElement>(route => (
                    <LinkImage
                        key={route.page}
                        uri={route.uri}
                        text={route.text}
                        title={route.title}
                        navigation={navigation}
                        navigateParams={[route.page, route.params]}
                    />
                ))}
            </View>
            <Separator>recent actions</Separator>
        </>
    </Container>
);

const styles = StyleSheet.create({
    list: { marginTop: 10, marginBottom: 20 },
});
