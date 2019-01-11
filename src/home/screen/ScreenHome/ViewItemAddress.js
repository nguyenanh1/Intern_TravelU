import React, {Component} from 'react';
import {View, Image, StyleSheet,Text} from 'react-native';
import {Rating} from 'react-native-elements';
import sale from '../../../../resource/image/sale.png'
export default class ViewItemAdreess extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={sale} />
        <Text style={styles.name}>{this.props.item.name}</Text>
        <View style={{flexDirection:"row", alignItems:"center",paddingLeft: 14}}>
          <Rating
            type="star"
            fractions={1}
            startingValue={this.props.item.ratestar}
            imageSize={15}
          />
          <Text style={{fontSize: 10,color: "#A5A4A4"}} >{this.props.item.numberate}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
      flexDirection:"column",
      marginLeft: 10,
  },
  name:{
    paddingLeft: 14,
    color: "#000000",
    fontSize: 13,
    marginTop: 10,
  }
});
