import {
    StyleSheet,
    Dimensions
} from 'react-native';
const width = Dimensions.get("window").width;
const khoangCach = 45;
const widthSearch = width - khoangCach * 2;
const styles = StyleSheet.create({
    toolbar: {
        width: width,
        height: 100,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    hint:{
        flex:9,
        color: "#9F9F9F",
        fontSize: 12
    },
    formSearch:{
        flexDirection: "row",
        width: widthSearch,
        marginLeft: khoangCach,
        backgroundColor:"#FFF",
        padding: 15,
        left:0,
        width:290,
        borderRadius: 5
    },
    contenttoolbar: {
        width: width,
        marginTop:'5%',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    brage: {
        position: "absolute",
        top: -5,
        right: -5,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbrage: {
        color: "#FF0404",
        fontSize: 9
    },
    hint: {
        flex: 9,
        color: "#9F9F9F",
        fontSize: 12
    },
    buttonBar: {
        flex: 1,
        width: width,
        marginTop:-100,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 65,
        height: 65,
        borderRadius: 5,
        backgroundColor: "white",
        margin: 5,
    },
    textbuton: {
        color: "#9F9F9F",
        fontSize: 10,
        marginTop: 10
    },
    danhmuc: {
        paddingTop: 10,
        paddingBottom: 10,
    },buttonBar:{
        flex: 1,
        width:width,
        marginTop: 15,
        flexDirection:"row",
        justifyContent:'center',
        alignItems: 'center',
        elevation:3
    },
    button:{
        marginTop:50,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 5,
        backgroundColor:"white",
        margin: 7,
        elevation:2
        
    },
    textbuton:{
        color:"#9F9F9F",
        fontSize:10,
        marginTop: 10
    },
});
module.exports = styles;