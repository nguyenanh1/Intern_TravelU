import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './style';
import bg from '../../resource/image/backgrounlogin.png';
import logo from '../../resource/image/logo.png';
import ic_facebook from '../../resource/image/ic_facebook.png';
import ic_google from '../../resource/image/ic_google.png';
import ic_mail from '../../resource/image/ic_mail.png';
import CustomButton from './component/CustomButton';
import {createAppContainer, createStackNavigator} from 'react-navigation';

export default class LoginOption extends Component {
  pressLogIn () {
    this.props.navigation.navigate ('Login');
  }
  render () {
    return (
      <ImageBackground source={bg} style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={[styles.logo]}>
          <Image source={logo} />
          <Text style={{color: 'white', fontSize: 12}}>
            Travel with people. Make new friends.
          </Text>
        </View>
        <View style={[styles.button]}>
          <CustomButton
            source={ic_facebook}
            color="white"
            title="Facebook"
            backgroundColor="#3C5997"
            borderColor="#3C5997"
          />
          <CustomButton
            source={ic_google}
            color="#000"
            title="Google"
            backgroundColor="white"
            borderColor="white"
          />
          <CustomButton
            source={ic_mail}
            color="white"
            title="Sign up with Email"
            backgroundColor="null"
            borderColor="white"
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                this.pressLogIn ();
              }}
            >
              <Text style={styles.login}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
