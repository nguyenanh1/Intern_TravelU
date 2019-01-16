import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
export default class ViewItemAdreess extends Component {
  render() {
    return (
      <TouchableOpacity style={{ width: 150 }} >
        <View style={styles.container}>
          <Image source={this.props.item.source} style={{ width: 145, height: 100, borderRadius: 5 }} />
          <Text style={styles.name}>{this.props.item.nameht}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", width: 140, marginLeft: 10 }}>
            <Rating
              type="star"
              fractions={1}
              startingValue={this.props.item.ratestar}
              imageSize={13}
            />
            <Text style={{ fontSize: 10, color: "#A5A4A4" }} >({this.props.item.numberate} Đánh giá)</Text>
          </View>          
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  name: {
    color: "#000000",
    fontSize: 13,
    width: 140,
    marginLeft: 10
  }
});
