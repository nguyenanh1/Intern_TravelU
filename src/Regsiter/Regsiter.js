import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, TextInput} from 'react-native';
import styles from './Style';

export default class Regsiter extends Component {
  render () {
    return (
      <View style={styles.khung}>
        <View style={styles.top}>
          <ImageBackground
            source={require ('../../resource/image/backgrountoplogin.png')}
            style={{width: '100%', height: '100%'}}
          >
            <Image source={require ('../../resource/image/ic_back.png')} />
            <Image
              source={require ('../../resource/image/logo.png')}
              style={{marginLeft: '25%'}}
            />
          </ImageBackground>
        </View>

        <View style={styles.body}>
          <View style={styles.form}>

            <View style={{margin: '10%'}}>
              <Text>Username</Text>
              <TextInput
                style={{
                  height: 40,
                  width: '80%',
                  borderColor: 'gray',
                  borderBottomWidth: 0.5,
                  fontSize: 20,
                }}
                placeholder="example@gmail.com"
              />
            </View>

            <View style={{margin: '10%'}}>
              <Text>Password</Text>
              <TextInput
                style={{
                  height: 40,
                  width: '80%',
                  borderColor: 'gray',
                  borderBottomWidth: 0.5,
                  fontSize: 20,
                }}
                placeholder="**********"
              />
            </View>

            <View style={{margin: '10%'}}>
              <Text>Repassword</Text>
              <TextInput
                style={{
                  height: 40,
                  width: '80%',
                  borderColor: 'gray',
                  borderBottomWidth: 0.5,
                  fontSize: 20,
                }}
                placeholder="**********"
              />
            </View>
          </View>
          <View style={styles.bot}>
            <Image
              source={require ('../../resource/image/button.png')}
              style={styles.anh}
            />
          </View>
        </View>
      </View>
    );
  }
}
