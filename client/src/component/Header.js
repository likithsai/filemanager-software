//  header
import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from './Card';

//  css styles
import Styles from '../theme/Styles';

const Header = (props) => {
    return (
        <Card style={[ Styles.row, Styles.justifyBetween, Styles.itemCenter, Styles.height70 ]}>
            <View style={[ Styles.row, Styles.itemCenter]}>
                <Ionicons name="folder" size={25} color="green" style={[ Styles.mr10 ]} />
                <Text style={[ Styles.fwBold, Styles.fs20 ]}>{props.title}</Text>
            </View>
            <TouchableOpacity style={[ Styles.row, Styles.fWrap, Styles.itemCenter ]}>
                <Ionicons name="md-settings" size={25} color="green" />
            </TouchableOpacity>
        </Card>
    );
}

export default Header;