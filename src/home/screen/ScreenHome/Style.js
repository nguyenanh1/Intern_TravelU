import {
    StyleSheet,
    Dimensions
} from 'react-native';
const width = Dimensions.get("window").width;
const khoangCach = 45;
const widthSearch = width-khoangCach*2;
const styles = StyleSheet.create({
    bgTop:{
        width: width,
        height: 220
    },
    toolbar:{
        marginTop: 40,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ring:{
        position:"absolute",
        top: 15,
        right: 30
    },
    brage: {
        position: "absolute",
        top: -5,
        right:-5,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "#FFF",
        justifyContent:'center',
        alignItems: 'center',
    },
    textbrage:{
        color:"#FF0404",
        fontSize: 9
    },
    formSearch:{
        marginTop: 20,
        flexDirection: "row",
        width: widthSearch,
        marginLeft: khoangCach,
        backgroundColor:"#FFF",
        padding: 15,
        borderRadius: 10
    },
    hint:{
        flex:9,
        color: "#9F9F9F",
        fontSize: 12
    },
    buttonBar:{
        flex: 1,
        width:width,
        marginTop: 10,
        flexDirection:"row",
        justifyContent:'center',
        alignItems: 'center',
    },
    button:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: 65,
        height: 65,
        borderRadius: 5,
        backgroundColor:"white",
        margin: 5,
    },
    textbuton:{
        color:"#9F9F9F",
        fontSize:10,
        marginTop: 10
    },
    danhmuc:{
        paddingTop: 10,
        paddingBottom:10 ,
    }
});
module.exports = styles;