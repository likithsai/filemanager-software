//  Styles.js
//  contains stylesheet codes


import { StyleSheet } from "react-native";
import COLORS from './Colors';

const Styles = StyleSheet.create({
    itemCenter: {
        alignItems: 'center'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row'
    },
    fWrap: {
        flexWrap: 'wrap'
    },
    flex1: {
        flex: 1
    },

    //  main
    app: {
        backgroundColor: COLORS.appBackground
    },

    //  header
    height70: {
        height: 70
    },

    mr10: {
        marginRight: 10
    },

    fwBold: {
        fontWeight: 'bold'
    },

    fs20: {
        fontSize: 20
    },

    //  card
    card: {
        elevation: 2,
        backgroundColor: COLORS.cardBackground
    },
    cardBottomLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    p15: {
        padding: 15
    }

});

export default Styles;