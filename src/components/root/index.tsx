import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React, { ReactElement } from 'react';

import { RootStackParamList } from '../../interfaces';
import { Colors } from '../../theme';
import { FullPageLoader } from '../common/full-page-loader';
import { Cites } from '../pages/cites';
import { Estimate } from '../pages/estimate';
import { Home } from '../pages/home';
import { Synonyms } from '../pages/synonyms';
import { Tags } from '../pages/tags';

const MainStack = createStackNavigator<RootStackParamList>();

export const App = (): ReactElement => {
    const backgroundColor = { backgroundColor: Colors.gray100 };

    const options: StackNavigationOptions = {
        title: '# Instatags',
        headerBackTitle: 'Back',
        headerStyle: backgroundColor,
        headerTitleStyle: { fontSize: 22, color: Colors.dark },
    };

    return (
        <>
            <NavigationContainer>
                <MainStack.Navigator initialRouteName="Home">
                    <MainStack.Screen name="Home" component={Home} options={options} />

                    <MainStack.Screen name="Estimate" component={Estimate} options={options} />
                    <MainStack.Screen name="Synonyms" component={Synonyms} options={options} />
                    <MainStack.Screen name="Cites" component={Cites} options={options} />

                    <MainStack.Screen name="Tags" component={Tags} options={options} />
                </MainStack.Navigator>
            </NavigationContainer>

            <FullPageLoader />
        </>
    );
};
