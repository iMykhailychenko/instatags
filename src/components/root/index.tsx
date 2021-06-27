import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useColors } from '../../hooks/colors.hook';
import { RootStackParamList } from '../../interfaces';
import { Cites } from '../pages/cites';
import { Estimate } from '../pages/estimate';
import { Home } from '../pages/home';
import { Synonyms } from '../pages/synonyms';
import { Tags } from '../pages/tags';

const MainStack = createStackNavigator<RootStackParamList>();

const ShareButton = (): ReactElement => {
    const colors = useColors();
    return (
        <Icon.Button
            name="ios-share"
            color={colors.blue700}
            size={25}
            underlayColor="transparent"
            backgroundColor="transparent"
            onPress={() => Alert.alert('Simple Button pressed')}
        />
    );
};

export const App = (): ReactElement => {
    const colors = useColors();
    const backgroundColor = { backgroundColor: colors.gray100 };

    const options: StackNavigationOptions = {
        title: '# Instatags',
        headerBackTitle: 'Back',
        headerStyle: backgroundColor,
        headerTitleStyle: { fontSize: 22, color: colors.dark },
        headerRight: ShareButton,
    };

    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Home">
                <MainStack.Screen name="Home" component={Home} options={options} />
                <MainStack.Screen name="Estimate" component={Estimate} options={options} />
                <MainStack.Screen name="Synonyms" component={Synonyms} options={options} />
                <MainStack.Screen name="Cites" component={Cites} options={options} />
                <MainStack.Screen name="Tags" component={Tags} options={options} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};
