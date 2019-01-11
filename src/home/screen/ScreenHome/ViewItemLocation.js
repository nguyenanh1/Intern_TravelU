import React, {Component} from 'react';
import {ImageBackground,Image, StyleSheet,Text} from 'react-native';
import vinh from '../../../../resource/image/vinh.png'

export default class ViewItemAdreess extends Component {
    render () {
      return (
        <ImageBackground style={styles.container}>
          <Image source={this.props.item.src} />
          <Text style={styles.name}>{this.props.item.name}</Text>
        </ImageBackground>
      );
    }
  }
  const styles = StyleSheet.create ({
    container: {
        width: 155,
        height: 255,
        marginLeft: 10,
    },
    name:{
      position:"absolute",
      top: 175,
      left: 20,
      color: "white"
    }
  });