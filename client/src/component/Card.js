//  card
import React from 'react';
import { View } from 'react-native';
import Styles from '../theme/Styles';

const Card = (props) => {
    return (
        <View style={[props.style, Styles.p15, Styles.card]}>
            { props.children }
        </View>
    );
}

export default Card;