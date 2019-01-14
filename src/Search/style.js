import {StyleSheet,Dimensions} from 'react-native';
const paddingSearch = 45;
const widthFull = Dimensions.get("window").width;
const widthForm = widthFull-paddingSearch*2;
const paddingLocation = 15;
const widthLocation = widthFull-paddingLocation*2;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    toolbar:{
        marginTop: 40,
        flexDirection:"row",
        alignItems: 'center',
        marginBottom: 10,
    },
    formsearch:{
        backgroundColor:"white",
        marginLeft: 10,
        borderRadius: 10,
        paddingLeft: 15,
        flexDirection:"row",
        alignItems: 'center',
        width:widthForm,
        marginLeft:paddingSearch
        
    },
    icback:{
        position:"absolute"
    },
    icsearch:{
        marginLeft: 35
    },
    location:{
        backgroundColor:"#FFFFFF",
        marginLeft:paddingLocation,
        width:widthLocation,
        borderRadius:5,
        flexDirection: "row",
        alignItems:"center",
        padding: 15,
    
    },
    locationText:{
        marginLeft:10,
        fontFamily: 'roboto regular',
        fontSize: 13,
        color:"#313131"
    },
    danhmuc:{
        paddingLeft: 15,
        paddingTop: 11,
        paddingBottom: 11,
        paddingRight: 15,
        backgroundColor:"#F3F3F3",
        flexDirection:"row"
    },
    tendanhmuc:{
        flex:9
    },
    danhmucbutton:{
        flex: 1
    }
});
export default style;