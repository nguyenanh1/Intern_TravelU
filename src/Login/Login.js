import React, {Component} from 'react';
import {
    View,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './style'
import bgtop from '../../resource/image/backgrountoplogin.png'
import logo from '../../resource/image/logo.png'
import { bold } from 'ansi-colors';
export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={bgtop} style={styles.backgroundTop}>
                    <Image source={logo}></Image>
                </ImageBackground>
                <View style={styles.white}></View>
                <View style={styles.form} elevation={5}>
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
                    <View style={[styles.edt,{alignItems:"center",justifyContent: "center",margin: 20}]}>
                        <TouchableOpacity style={[{backgroundColor:"#F117BE", borderRadius:20,paddingTop: 15,paddingBottom: 15, paddingLeft:60, paddingRight:60}]}>
                            <Text style={[{color:"white",fontSize: 14, fontWeight:"bold"}]}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.edt,{alignItems:"center",justifyContent: "center",margin: 20, flexDirection:"row"}]}>
                        <Text style={{color:"#9596AD"}}>Don't have an account?
                        </Text>
                        <TouchableOpacity style={{}}>
                            <Text style={[{color:"#2088FF",fontWeight: "200",marginLeft:10}]}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}