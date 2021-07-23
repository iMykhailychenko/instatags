import React, { ReactElement } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useColors } from '../../../hooks/colors.hook';

export const FullPageLoader = (): ReactElement => {
    const colors = useColors();

    return (
        <View>
            <ActivityIndicator size="large" color={colors.blue700} />
        </View>
    );
};
