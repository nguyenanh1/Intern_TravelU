import React, { Component } from 'react';
import { Text,View,ImageBackground} from 'react-native';
import styles from './Style';

export default class Regsiter extends Component {
    render() {
      return (
        <View style={styles.khung}>
            <View style={styles.top}>
            <ImageBackground source={'../../resource'} style={{width: '100%', height: '100%'}}></ImageBackground>
            </View>
        </View>
      );
    }
  }