import React, {Component} from 'react';
import {View, StatusBar, Text, TouchableHighlight, Image} from 'react-native';
import Timeline from 'react-native-timeline-listview';
import styles from './style';
import data from './dataplan';
export default class Ngay1 extends Component {
  render () {
    return (
      <View style={{backgroundColor:"#FFF", flex: 1}}>
        <View
          style={{
            marginLeft: 17,
            marginRight: 17,
            flexDirection: 'row',
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 0.2,
            borderBottomColor: '#707070',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}
            >
              Ngày 1
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#000',
                fontFamily: 'Roboto',
                opacity: 0.47,
              }}
            >
              23/10/2018
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}
            >
              Số Km
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#000',
                fontFamily: 'Roboto',
                opacity: 0.47,
              }}
            >
              9.8 km
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}
            >
              Số địa điểm
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#000',
                fontFamily: 'Roboto',
                opacity: 0.47,
              }}
            >
              4 places
            </Text>
          </View>
        </View>
        <Timeline
          style={styles.list}
          data={data}
          circleSize={20}
          circleColor="rgba(0,0,0,0)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{minWidth: 52, marginTop: -5}}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#ff9797',
            color: 'white',
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{color: 'gray'}}
          options={{
            style: {paddingTop: 5},
          }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
        />
      </View>
    );
  }
}
