import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

import Ngay1 from './Ngay1';
import Ngay2 from './Ngay2';
import Ngay3 from './Ngay3';
const HomeTab = createMaterialTopTabNavigator (
  {
    "Day 1": Ngay1,
    "Day 2": Ngay2,
    "Day 3": Ngay3,
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: Dimensions.get ('window').width / 3,
      },
      style: {
        backgroundColor: 'transparent',
      },
      indicatorStyle: {
        backgroundColor: '#fff',
        height: 3,
        marginBottom: 5
      },
    },
  }
);

const AppContainer = createAppContainer (HomeTab);

export default class PLanDetail extends Component {
  constructor (props) {
    super (props);
    this.onEventPress = this.onEventPress.bind (this);
    this.renderSelected = this.renderSelected.bind (this);
    this.renderDetail = this.renderDetail.bind (this);
  }
  onEventPress (data) {
    this.setState ({selected: data});
  }
  renderSelected () {
    if (this.state.selected)
      return (
        <Text style={{marginTop: 10}}>
          Selected event:
          {' '}
          {this.state.selected.title}
          {' '}
          at
          {' '}
          {this.state.selected.time}
        </Text>
      );
  }
  renderDetail (rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{uri: rowData.imageUrl}} style={styles.image} />
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      );

    return (
      <View style={{flex: 1}}>
        {title}
        {desc}
      </View>
    );
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
            <Text style={[styles.title, {flex: 7}]}>Create trip plan</Text>
            <TouchableHighlight style={{flex: 1}}>
              <Image
                source={require ('../../resource/image/ic_notes.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight style={{flex: 1}}>
              <Image source={require ('../../resource/image/map.png')} />
            </TouchableHighlight>
          </View>

        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#F117BE', '#8D0CBA']}
          style={{flex: 1}}
        >
          <AppContainer />
        </LinearGradient>

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
              Add Place
            </Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    );
    // <AppContainer/>
  }
}
