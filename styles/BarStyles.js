import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');


export const BarStyles = StyleSheet.create({
    barGraph: {
        width: windowWidth,
        height: windowHeight * .75,
        backgroundColor: '#000000',
        barColor: '#4FC6D6',
    },
})