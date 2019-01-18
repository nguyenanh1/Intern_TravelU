import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
const widthFull = Dimensions.get ('window').width;
export default class ViewItemBudget extends Component {
  render () {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.props.onPress}  >
        <View
          style={{
            width: widthFull,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 10,
            margin: 0,
          }}
        >
          <Image source={this.props.item.src} />
          <View style={{position: 'absolute', bottom: 20, left: 20, right: 20}}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View
                elevation={1}
                style={{
                  backgroundColor: '#FFF',
                  borderRadius: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <Text style={{color: '#000000', fontSize: 12}}>
                  {this.props.item.datename}
                </Text>
              </View>
              <View
                elevation={1}
                style={{
                  backgroundColor: '#FFF',
                  borderRadius: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginLeft: 10,
                }}
              >
                <Text style={{color: '#000000', fontSize: 12}}>
                  {this.props.item.numberPlace}
                </Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 4}}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
                      fontWeight: 'normal',
                    }}
                  >
                    {this.props.item.date}
                  </Text>
                </View>
                <View
                  style={{flex: 2, alignItems: 'center', flexDirection: 'row'}}
                >
                  <Image
                    source={require ('../../resource/image/ic_loaction_white.png')}
                  />
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 13,
                      fontWeight: 'normal',
                    }}
                  >
                    Mở bản đồ
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
