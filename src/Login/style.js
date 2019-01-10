import {Dimensions} from 'react-native';
const khoangcach = 10;
const width = Dimensions.get('window').width-khoangcach*2;

var styles = {
    container:{
        flex: 1,
        backgroundColor:"white"
    },
    backgroundTop:{
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    white:{
        flex: 3,
        backgroundColor:"white"
    },
    form:{
        position: 'absolute',
        top:140,
        left:khoangcach,
        width:width,
        backgroundColor:"white",
        borderRadius: 20,
        borderColor: "#707070",
        
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 20
    },
    title:{
        color:'#2B2D5C',
        fontSize:12
    },
    textinput:{
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        fontSize:16
    },
    edt:{
        marginBottom: 20,
    },
    forget:{
        flex : 1,
        alignItems:"flex-end"
    },
    textforget:{
        color:'#2B2D5C',
        fontSize:14,
        opacity:0.5
    }
}
module.exports = styles;