import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
export default class CreateMyTripPlane extends Component {
  static navigationOptions = {
    tabBarVisible: false
  };
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#F117BE', '#8D0CBA']}
        >
          <View style={styles.toolbar}>
            <TouchableHighlight
              underlayColor="transparent"
              style={styles.icback}
              onPress={() => {
                this.props.navigation.goBack ();
              }}
            >
              <Image source={require ('../../resource/image/ic_back.png')} />
            </TouchableHighlight>
            <Text style={[styles.title]}>Create trip plan</Text>
          </View>
        </LinearGradient>
        <View>
          <View />
        </View>
      </View>
    );
  }
}
