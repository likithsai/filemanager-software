//  header
import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from './Card';

//  css styles
import Styles from '../theme/Styles';

const Header = (props) => {
    return (
        <Card style={[ Styles.row, Styles.justifyBetween, Styles.itemCenter, Styles.height70, Styles.cardBottomLine ]}>
            <View style={[ Styles.row, Styles.itemCenter]}>
                <Ionicons name="folder" size={25} color="green" style={[ Styles.mr10 ]} />
                <Text style={[ Styles.fwBold, Styles.fs20 ]}>{props.title}</Text>
            </View>
            <View style={[ Styles.row, Styles.justifyBetween, Styles.itemCenter ]}>
                <TouchableOpacity style={[ Styles.row, Styles.fWrap, Styles.itemCenter ]} onPress={props.onButtonPress}>
                    <Ionicons name="add" size={30} color="green" />
                </TouchableOpacity>
            </View>
        </Card>
    );
}

export default Header;