import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../../theme';
import { months } from './date.config';

interface IProps {
    date?: Date;
}

export const DateComponent = ({ date = new Date() }: IProps): ReactElement => (
    <View style={styles.box}>
        <Text style={styles.text}>DATE</Text>
        <Text style={styles.date}>
            {date?.getDate()} {months[date?.getMonth() || 0]} {date?.getFullYear()}
        </Text>
    </View>
);

export const DateComponentSmall = ({ date = new Date() }: IProps): ReactElement => (
    <View>
        <Text style={styles.text}>DATE</Text>
        <Text style={styles.date}>
            {date?.getDate()} {months[date?.getMonth() || 0]} {date?.getFullYear()}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    box: {
        marginBottom: 30,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.dark,
    },
    date: {
        fontSize: 16,
        color: Colors.dark,
        opacity: 0.5,
    },
});
