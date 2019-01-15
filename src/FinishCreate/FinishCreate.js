import React, {Component} from 'react';
import {View} from 'react-native';

export default class FinishCreate extends Component {
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
            <Text style={[styles.title, {flex: 8}]}>Create trip plan</Text>
            <TouchableHighlight style={{flex: 1}}>
              <Image
                source={require ('../../resource/image/ic_add_people.png')}
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
