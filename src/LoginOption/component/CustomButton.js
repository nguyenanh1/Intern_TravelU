import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
export default class CustomButton extends Component{
    
    render(){
        const defaulProps = {
            onPress: ()=>{
            },
            title:"",
            backgroundColor:"white",
            color:"white",
            source:"",
            borderColor:"white"     
        }
        return(
            <TouchableOpacity style={[styles.touch,{backgroundColor: this.props.backgroundColor, borderColor:this.props.borderColor,borderWidth: 1}]}>
                <Text style={{color:this.props.color, fontSize: 12}}>{this.props.title}</Text>
                <Image style={{position: "absolute",top:10,left: 20}} source={this.props.source}></Image>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    touch:{
        justifyContent:"center",
        alignItems:"center",
        marginLeft: 50,
        marginRight:50,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius:30,
        marginBottom: 10,
        marginTop: 10
    }
});

