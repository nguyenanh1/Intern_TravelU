import React, {Component} from 'react';
import {
    View,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'
import bgtop from '../../resource/image/backgrountoplogin.png'
import logo from '../../resource/image/logo.png'
import back from '../../resource/image/ic_back.png'

export default class Login extends Component{
    signUp(){
        this.props.navigation.navigate('Register');
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden/>
                <ImageBackground source={bgtop} style={styles.backgroundTop}>
                    <Image source={logo}></Image>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position: 'absolute',top: 38, left:5}}><Image source={back}></Image></TouchableOpacity>
                </ImageBackground>
                <View style={styles.white}></View>
                
                <View style={styles.form} elevation={5}>
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.edt}>
                        <Text style={styles.title}>Username</Text>
                        <TextInput style={styles.textinput} placeholder="example@email.com"></TextInput>
                    </View>
                    <View style={styles.edt}>
                        <Text style={styles.title}>Password</Text>
                        <TextInput style={styles.textinput} secureTextEntry={true}></TextInput>
                    </View>
                    <View style={[styles.edt,styles.forget]}>
                        <TouchableOpacity>
                            <Text style={styles.textforget}>Forget your password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.edt,styles.viewLogin]}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{borderRadius:30,paddingTop: 15,paddingBottom: 15, paddingLeft:70, paddingRight:70}} colors={["#F117BE","#8D0CBA"]}>
                                <Text style={[{color:"white",fontSize: 14, fontWeight:"bold"}]}>LOGIN</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.edt,styles.signUp]}>
                        <Text style={{color:"#9596AD"}}>Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={()=>{this.signUp()}}>
                            <Text style={[{color:"#2088FF",fontWeight: "200",marginLeft:10}]}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}