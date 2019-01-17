import React, {Component} from 'react';
import {View, StatusBar, TouchableHighlight, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

export default class TripPLan extends Component {
  render () {
    return (
      <View s={styles.container}>
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
            <Text style={[styles.title, {flex: 8}]}>Trip plan</Text>
            <TouchableHighlight style={{flex: 1}}>
              <Image
                source={require ('../../resource/image/ic_search_write.png')}
              />
            </TouchableHighlight>
          </View>
         
        </LinearGradient>
        <View
          style={{
            marginBottom: 250,
            backgroundColor: '#FFFFFF',
          }}
        />
      </View>
    );
  }
}
