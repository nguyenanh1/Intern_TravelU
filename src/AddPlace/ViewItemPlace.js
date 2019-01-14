import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';
import {Rating} from 'react-native-elements';

export default class ViewItemPlace extends Component {
  changeMoney(props){
      return props.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')+"đ"; 
  }
  pressAdd(){
      
  }
  render () {
    return (
      <TouchableHighlight>
        <View style={styles.container}>
          <View style={styles.img}>
            <Image source={this.props.item.src} />
          </View>
          <View style={styles.text}>
            <Text
              style={{
                fontSize: 14,
                color: '#000000',
                fontFamily: 'Roboto Regular',
              }}
            >
              {this.props.item.name}
            </Text>
            <View
              style={{flexDirection: 'row', margin: 3, alignItems: 'center'}}
            >
              <Rating
                type="star"
                fractions={1}
                startingValue={this.props.item.ratestar}
                imageSize={10}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: '#A5A4A4',
                  fontFamily: 'Roboto Regular',
                }}
              >
                {this.props.item.numrate}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', margin: 3, alignItems: 'center'}}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Roboto Regular',
                  color: '#313131',
                  opacity: 0.5,
                }}
              >
                Hotel star{' '}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Roboto Regular',
                  color: '#313131',
                  opacity: 0.5,
                }}
              >
                {this.props.item.holtelstar}
              </Text>
              <Image
                style={{marginBottom: 10}}
                source={require ('../../resource/image/ic_star.png')}
              />
            </View>
            <View
              style={{flexDirection: 'row', margin: 3, alignItems: 'center'}}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Roboto Regular',
                  color: '#313131',
                  opacity: 0.5,
                }}
              >
                Per night{' '}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Roboto Regular',
                  color: '#FF5526',
                }}
              >
                {this.changeMoney(this.props.item.pernight)}
              </Text>
            </View>
          </View>
          <View style={styles.controll}>
            <TouchableHighlight>
              <View
                style={{
                  width: 90,
                  height: 35,
                  backgroundColor: '#59BAF8',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  margin:5
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Roboto Regular',
                    color: '#FFFFFF',
                  }}
                >
                  Thêm
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
            <View
                style={{
                  width: 90,
                  height: 35,
                  backgroundColor: '#FB53A1',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  margin:5
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Roboto Regular',
                    color: '#FFFFFF',
                  }}
                >
                  Book
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    marginBottom: 5,
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: 13,
    paddingBottom: 13,
  },
  img: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 4,
    justifyContent: 'center',
  },
  controll: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
