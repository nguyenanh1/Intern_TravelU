import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TouchableHighlight,
  Switch,
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
export default class FinishCreate extends Component {
  constructor (props) {
    super (props);
    this.state = {
        privateValue: false,
    }
  }
  changeSwitch () {
    getValuePrivate = this.state.privateValue;
    this.setState ({
      privateValue: !getValuePrivate,
    });
  }
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
          </View>
        </LinearGradient>
        <View
          style={{
            marginBottom: 250,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
          }}
        >
          <Image
            style={{marginTop: 30}}
            source={require ('../../resource/image/ic_plane.png')}
          />
          <Text style={{fontSize: 30, color: '#000', marginTop: 13}}>
            Creat Success
          </Text>
          <Text
            style={{fontSize: 13, color: '#000', marginTop: 25, opacity: 0.5}}
          >
            Share trip plan
          </Text>
          <Image source={require ('../../resource/image/ic_fb_gmail.png')} />
          <View style={{flexDirection:"row", marginTop: 13, alignItems:"center"}}>
            <Text>Download this plan?</Text>
            <Switch
                    value={this.state.privateValue}
                    onValueChange={() => {
                      this.changeSwitch ();
                    }}
                    style={{marginLeft: 13}}
                  />
          </View>
        </View>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate ('FinishCreate');
          }}
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        >
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#F117EA', '#DC444A']}
            style={styles.nextstep}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: '#FFF',
              }}
            >
              Finish
            </Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    );
  }
}
