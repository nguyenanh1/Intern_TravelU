import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import bgHome from '../../../../resource/image/bghome.png';
import icTravelu from '../../../../resource/image/ic_travelu.png';
import ring from '../../../../resource/image/ring.png';
import icSearch from '../../../../resource/image/ic_search.png';
import icTripplane from '../../../../resource/image/ic_tripplane.png';
import icAirplane from '../../../../resource/image/ic_airplane.png';
import icBus from '../../../../resource/image/ic_bus.png';
import icHotel from '../../../../resource/image/ic_hotel.png';
import icRestaurent from '../../../../resource/image/ic_restaurent.png';
import styles from './Style';
import datasale from './datakhuyenmai';
import datalocation from './DataLocation';
import ViewItemAddress from './ViewItemAddress';
import ViewItemLocation from './ViewItemLocation';
export default class Search extends Component {
  render () {
    return (
      <ScrollView>
        <ImageBackground source={bgHome} style={styles.bgTop}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <View style={styles.toolbar}>
            <Image source={icTravelu} />
            <TouchableOpacity style={styles.ring}>
              <Image source={ring} />
              <View style={styles.brage}>
                <Text style={styles.textbrage}>7</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate ('Search');
            }}
            underlayColor="transparent"
          >
            <View style={styles.formSearch}>
              <Text style={styles.hint}>
                Find Destinations, hotels, restaure, ...
              </Text>
              <Image source={icSearch} style={styles.icsearch} />
            </View>
          </TouchableHighlight>
          <View style={styles.buttonBar}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate ('TripPlan');
              }}
            >
              <View style={styles.button}>
                <Image source={icTripplane} style={styles.imageButton} />
                <Text style={styles.textbuton}>Trip plans</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate ('Homehotel');
              }}
            >
              <View style={styles.button}>
                <Image source={icHotel} style={styles.imageButton} />
                <Text style={styles.textbuton}>Hotels</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Image source={icAirplane} style={styles.imageButton} />
                <Text style={styles.textbuton}>Flights</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate ('HomeRestaurant');
              }}
            >
              <View style={styles.button}>
                <Image source={icRestaurent} style={styles.imageButton} />
                <Text style={styles.textbuton}>Restaurents</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate ('HomeTours');
              }}
            >
              <View style={styles.button}>
                <Image source={icBus} style={styles.imageButton} />
                <Text style={styles.textbuton}>Tours</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View>
          <View style={styles.danhmuc}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  flex: 7,
                  fontSize: 14,
                  color: '#000000',
                  marginLeft: 19,
                }}
              >
                Tin khuyến mại
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    flex: 1,
                    color: '#ED50C6',
                    fontSize: 12,
                    marginRight: 19,
                  }}
                >
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={datasale}
                renderItem={({item, index}) => {
                  return (
                    <ViewItemAddress
                      item={item}
                      index={index}
                      parentFlatList={this}
                    />
                  );
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{
                  flexDirection: 'row',
                }}
              />
            </View>
          </View>
          <View style={styles.danhmuc}>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 19,
                paddingRight: 19,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{flex: 7, fontSize: 14, color: '#000000'}}>
                Địa điểm phổ biến
              </Text>
              <TouchableOpacity>
                <Text style={{flex: 1, color: '#ED50C6', fontSize: 12}}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatList
                data={datalocation}
                renderItem={({item, index}) => {
                  return (
                    <ViewItemLocation
                      item={item}
                      index={index}
                      parentFlatList={this}
                    />
                  );
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </View>
          </View>
          <View style={styles.danhmuc}>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 19,
                paddingRight: 19,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{flex: 7, fontSize: 14, color: '#000000'}}>
                Đia điểm gần bạn
              </Text>
              <TouchableOpacity>
                <Text style={{flex: 1, color: '#ED50C6', fontSize: 12}}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={datasale}
                renderItem={({item, index}) => {
                  return (
                    <ViewItemAddress
                      item={item}
                      index={index}
                      parentFlatList={this}
                    />
                  );
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{
                  flexDirection: 'row',
                }}
              />
            </View>
            <View />
          </View>
          <View style={styles.danhmuc}>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 19,
                paddingRight: 19,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{flex: 7, fontSize: 14, color: '#000000'}}>
                Tháng 10 bạn nên đi đâu?
              </Text>
              <TouchableOpacity>
                <Text style={{flex: 1, color: '#ED50C6', fontSize: 12}}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={datasale}
                renderItem={({item, index}) => {
                  return (
                    <ViewItemAddress
                      item={item}
                      index={index}
                      parentFlatList={this}
                    />
                  );
                }}
                horizontal={true}
                style={{
                  flexDirection: 'row',
                }}
              />
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}
