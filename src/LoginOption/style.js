import {StyleSheet} from 'react-native'
var styles = StyleSheet.create({
    container:{
        flex: 1,
        width:null,
        height:null,
        flexDirection: 'column',
    },
    logo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        flex: 1,
        justifyContent: 'center',
    },
    login:{
        color:"white",
        fontFamily: 'GothamBook Regular',
        fontSize: 15,
        margin: 10,
    }
});
module.exports = styles;