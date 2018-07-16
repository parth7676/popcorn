import React from 'react';
import Logo from '../../public/images/logo.jpg';
import { Image, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class LogoTitle extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="md-menu" size={35} color="white" onPress={() => navigation.toggleDrawer()} />
            </View>
        );
    }
}