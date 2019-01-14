import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import datasearch from './datasearch';
import datahot from './datahot';
import ViewItemSearch from './ViewItemSearch';
import ViewItemHot from './ViewItemHot';
export default class Search extends Component {
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
              onPress={()=>{
                this.props.navigation.goBack();
              }}
            >
              <Image source={require ('../../resource/image/ic_back.png')} />
            </TouchableHighlight>
            <View style={styles.formsearch}>
              <TextInput
                style={styles.textinput}
                placeholder="Find Destinations, hotels, restaure, ..."
              />
              <TouchableHighlight underlayColor="transparent">
                <Image
                  style={styles.icsearch}
                  source={require ('../../resource/image/ic_search.png')}
                />
              </TouchableHighlight>
            </View>

          </View>
        </LinearGradient>
        <ScrollView>
          <TouchableHighlight>
            <View
              style={[styles.location, {marginBottom: 5, marginTop: 15}]}
              elevation={5}
            >
              <Image
                style={styles.locationImage}
                source={require ('../../resource/image/ic_location_large.png')}
              />
              <Text style={styles.locationText}>Địa điểm gần bạn</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={[styles.location, {marginBottom: 15}]} elevation={5}>
              <Image
                style={styles.locationImage}
                source={require ('../../resource/image/ic_gps.png')}
              />
              <Text style={styles.locationText}>Hà nội</Text>
            </View>
          </TouchableHighlight>
          <View style={{backgroundColor:"#F3F3F3"}}>
            <View style={styles.danhmuc}>
              <Text style={styles.tendanhmuc}>Địa điểm đã tìm</Text>
              <TouchableHighlight
                style={styles.danhmucbutton}
                underlayColor="transparent"
              >
                <Text style={{color:"#FF0000",fontSize:13, fontFamily: "Roboto regular"}}>Xóa</Text>
              </TouchableHighlight>
            </View>
            <FlatList 
              data={datasearch}
              renderItem={({item, index})=>{
                return (
                  <ViewItemSearch item={item} index={index} />
                  );
              }}
            />
          </View>
          <View>
            <View style={styles.danhmuc}>
              <Text style={styles.tendanhmuc}>Địa điểm phổ biến</Text>
            </View>
            <FlatList 
              data={datahot}
              renderItem={({item, index})=>{
                return (
                  <ViewItemHot item={item} index={index} />
                  );
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
