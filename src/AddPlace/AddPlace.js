import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableHighlight, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import { FlatList } from 'react-native-gesture-handler';
import dataplace from './dataplace'
import ViewItemPlace from './ViewItemPlace'
export default class AddPlace extends Component {
  constructor (props) {
    super (props);
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
                source={require ('../../resource/image/ic_search_write.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight style={{flex: 1}}>
              <Image source={require ('../../resource/image/map.png')} />
            </TouchableHighlight>
          </View>
        </LinearGradient>
        <View style={
              {
                marginBottom: 180,
                backgroundColor:"#F3F5F9"
              }
            }> 
          <View style={styles.fillter}>
            <View style={{flex: 7}}>
              <Text>Sort by: Popular</Text>
            </View>
            <View style={{flex: 3,flexDirection:"row",justifyContent:"flex-end", marginRight: 20, alignItems:"center"}}>
                <Image source={require("../../resource/image/ic_fillter.png")}/>
                <Text style={{marginLeft: 10}}>Fillter</Text>
            </View>
          </View>
          <FlatList 
            data={dataplace}
            renderItem={({item,index})=>{
              return <ViewItemPlace item={item} index={index}/>
            }}
            
          />
        </View>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate ('AddPlace');
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
              Next step
            </Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    );
  }
}
