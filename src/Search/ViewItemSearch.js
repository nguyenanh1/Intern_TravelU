import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class ViewItemSearch extends Component {
  render () {
    return (
      <View style={styles.form}>
        <View style={styles.pin}>
          <Image source={require ('../../resource/image/ic_pin.png')} />
        </View>
        <View style={styles.text}>
          <Text style={{color:"#000000", fontSize: 13, fontFamily: "Roboto regular"}}>{this.props.item.name}</Text>
          <Text style={{color:"#8D8888", fontSize: 13, fontFamily: "Roboto regular"}}>{this.props.item.des}</Text>
        </View>
        <View style={styles.km}>
          <Text style={{color:"#9F9F9F", fontSize: 13, fontFamily: "Roboto regular"}}>{this.props.item.km}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  form: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 1,
    paddingTop: 17,
    paddingBottom: 17,
    backgroundColor:"#FFFFFF",
  },
  pin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 7,
  },
  km: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
