import React, { Component } from 'react';
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
import bgtop from '../../../resource/image/addbudget.png';
import bgtop2 from '../../../resource/image/chobe.png';
import bgtop3 from '../../../resource/image/place.png';
import icSearch from '../../../resource/image/ic_search.png';
import icTripplane from '../../../resource/image/ic_tripplane.png';
import icAirplane from '../../../resource/image/ic_airplane.png';
import icBus from '../../../resource/image/ic_bus.png';
import icHotel from '../../../resource/image/ic_hotel.png';
import icback from '../../../resource/image/ic_back.png'
import icRestaurent from '../../../resource/image/ic_restaurent.png';
import icmap from '../../../resource/image/map.png';
import ic_createtrip from '../../../resource/image/ic_createtrip.png'
import styles from './Style';
import Viewkhuvuichoi from './Viewkhuvuichoi';
import Datakhuvuichoi from './Datakhuvuichoi';
const imglist=[
  {id :1,uri:bgtop},
  {id :2,uri:bgtop2},
  {id :3,uri:bgtop3},
]
export default class DetailHotel extends Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground source={imglist[2].uri} style={styles.bgTop}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <View style={{ width: '100%', height: 100, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }} style={{ justifyContent: 'center' }}>
              <Image source={icback} />
            </TouchableOpacity>
            <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, color: 'white', }}>Đà lạt</Text>
            </View>
            <TouchableOpacity onPress={() => { }} style={{ justifyContent: 'center', marginRight: 20 }}>
              <Image source={icmap} />
            </TouchableOpacity>
          </View>
          <TouchableHighlight onPress={() => { this.props.navigation.navigate('Searchdalat'); }}
            underlayColor="transparent">
            <View style={styles.formSearch}>
              <Text style={styles.hint}>What do you search in Đà Lạt</Text>
              <Image source={icSearch} style={styles.icsearch} />
            </View>
          </TouchableHighlight>
          <View style={styles.buttonBar}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('TripPlan'); }}>
              <View style={styles.button}>
                <Image source={icTripplane} style={styles.imageButton} />
                <Text style={styles.textbuton}>Trip plans</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Homehotel'); }}>
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
                this.props.navigation.navigate('HomeRestaurant');
              }}
            >
              <View style={styles.button}>
                <Image source={icRestaurent} style={styles.imageButton} />
                <Text style={styles.textbuton}>Restaurents</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('HomeTours');
              }}
            >
              <View style={styles.button}>
                <Image source={icBus} style={styles.imageButton} />
                <Text style={styles.textbuton}>Tours</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        
        <View style={{ alignItems: 'center', margin: 10, marginTop: 27, elevation: 0.5, height: 200, borderRadius: 5 }}>
          <Text style={{ color: '#990099', fontSize: 20, fontWeight: 'bold' }}>Giới Thiệu</Text>
          <View style={{ borderWidth: 1, borderColor: 'blue', margin: 10, height: 145 }}>
            <Text style={{ margin: 4, color: 'black' }}>Đà lạt là một thành phố trực thuộc tỉnh và tỉnh lị lâm đồng, nằm trên cao nguyên Lâm Viên. Ở độ cao 1.500m so với mực nước biển và diện tích tự nhiên 393.29 Km2
                  Với nhiều cảnh quan đẹp , Đà Lạt là một trong những thành phố du lịch nổi tiếng nhất của việt nam</Text>
          </View>
          <TouchableOpacity style={{ position: "absolute", flexDirection: "column", justifyContent: "center", alignItems: "center", right: -8, bottom: -15 }}>
            <Image source={ic_createtrip} />
            <Text style={{ color: "#F36BDD", fontSize: 11 }}>Create trip plane</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 8, }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 14, }}>Top vui chơi giải trí</Text>
            <TouchableOpacity style={{ marginRight: 10 }} >
              <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Datakhuvuichoi}
            renderItem={({ item, index }) => {
              return (
                <Viewkhuvuichoi
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
        <View style={{ marginTop: 8, }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 14, }}>Top Khách sạn</Text>
            <TouchableOpacity style={{ marginRight: 10 }} >
              <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Datakhuvuichoi}
            renderItem={({ item, index }) => {
              return (
                <Viewkhuvuichoi
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
        <View style={{ marginTop: 8, }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 14,}}>Top ăn uống</Text>
            <TouchableOpacity style={{ marginRight: 10 }} >
              <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Datakhuvuichoi}
            renderItem={({ item, index }) => {
              return (
                <Viewkhuvuichoi
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
        <View style={{ marginTop: 8, }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 14, }}>Địa điểm vui chơi giir trí địa phương</Text>
            <TouchableOpacity style={{ marginRight: 10 }} >
              <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Datakhuvuichoi}
            renderItem={({ item, index }) => {
              return (
                <Viewkhuvuichoi
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
        <View style={{ marginTop: 8, }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 14, }}>Địa điểm dành cho gia đình</Text>
            <TouchableOpacity style={{ marginRight: 10 }} >
              <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Datakhuvuichoi}
            renderItem={({ item, index }) => {
              return (
                <Viewkhuvuichoi
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
        <View style={{ marginTop: 8, }}>
          <View style={{ flex: 1, flexDirection: 'row', }}>
            <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 14, }}>Địa điểm mới lạ</Text>
            <TouchableOpacity style={{ marginRight: 10 }} >
              <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Datakhuvuichoi}
            renderItem={({ item, index }) => {
              return (
                <Viewkhuvuichoi
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

      </ScrollView>
    );
  }
}
