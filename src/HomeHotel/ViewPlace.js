import React, {Component} from 'react';
import {View,Image, StyleSheet,Text} from 'react-native';

export default class ViewItemAdreess extends Component {
    render () {
      return (
        <View style={styles.container}>
          <Image source={this.props.item.src} />
          <Text style={styles.name}>{this.props.item.name}</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create ({
    name:{
      position:"absolute",
      top: 175,
      left: 20,
      color: "white"
    }
  });