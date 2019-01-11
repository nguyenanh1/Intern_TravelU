import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient'

export default class Regsiter extends Component {
  pressLogIn() {
  }

  buttonRegister = () => {
    this.props.navigation.navigate("HobbisScreen")
  }

  render() {
    return (
      <View style={styles.khung}>
        <View style={styles.top}>
          <ImageBackground
            source={require('../../resource/image/backgrountoplogin.png')}
            style={{ width: '100%', height: '100%' }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login") }}>
              <Image
                source={require('../../resource/image/ic_back.png')}
                style={{ marginTop: 38.5 }} /></TouchableOpacity>
            <Image
              source={require('../../resource/image/logo.png')}
              style={{ marginLeft: '25%', marginTop: -38.5 }}
            />
          </ImageBackground>
        </View>
        <View style={styles.body}>
          <View style={styles.form}>
            <View style={{ margin: '5%', marginTop: '10%' }}>
              <Text style={styles.textname}>Username</Text>
              <TextInput
                style={styles.textinput}
                placeholder="example@gmail.com"
              />
            </View>
            <View style={{ margin: '5%' }}>
              <Text style={styles.textname}>Password</Text>
              <TextInput
                style={styles.textinput}
                placeholder="**********"
                secureTextEntry={true}
              /></View>
            <View style={{ margin: '5%' }}>
              <Text style={styles.textname}>Repassword</Text>
              <TextInput
                style={styles.textinput}
                placeholder="**********"
                secureTextEntry={true}
              /></View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '17%' }} >
            <TouchableOpacity onPress={() => { this.buttonRegister() }}  >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderRadius: 30, paddingTop: 15, paddingBottom: 15, paddingLeft: 70, paddingRight: 70 ,marginTop:'10%'}} colors={["#F117BE", "#8D0CBA"]}>
                  <Text style={[{ color: "white", fontSize: 14, fontWeight: "bold" }]}>Regsiter</Text>
                </LinearGradient>
              </TouchableOpacity>

            </View>
          </View>
          <View style={styles.bot}>
          </View>
        </View>
      </View>
    );
  }
}
