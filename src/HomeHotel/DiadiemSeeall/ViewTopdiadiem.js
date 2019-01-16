import React, {Component} from 'react';
import {View,Image, StyleSheet,Text,TouchableOpacity} from 'react-native';

export default class ViewItemAdreess extends Component {
    render () {
      return (
        <TouchableOpacity style={{width:'100%',justifyContent:'center'}}>
          <View style={{marginTop:'2%',borderRadius:15}}>
          <Image source={this.props.item.src} style={{width:'100%',borderRadius:15}} />
          <Text style={styles.name}>{this.props.item.name}</Text>
          <Text style={{position:"absolute",fontSize:20,fontWeight:'bold',color: "white"}}>{this.props.item.mota}</Text>
        </View>
        </TouchableOpacity>
      );
    }
  }
  const styles = StyleSheet.create ({
    name:{
      position:"absolute",
      fontSize:20,
      fontWeight:'bold',
      color: "white"
    }
  });