import React, { Component } from 'react';
import {
    View, Text, ScrollView, ImageBackground, Image, FlatList, TouchableOpacity, StatusBar, TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import icback from '../../../resource/image/ic_back.png'
import icsort from '../../../resource/image/sort_pink.png'
import ictim from '../../../resource/image/ic_search_write.png';
import icmap from '../../../resource/image/map.png';
import styles from './style';
import { TextInput } from 'react-native-gesture-handler';
import DatatopHotel from './../TopHotelSeeall/DatatopHotel';
import ViewtopHotelSeeall from './../TopHotelSeeall/ViewtopHotelSeeall';

export default class Homehotel extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: "transparent" }}>
                    <View style={styles.toolbar}>
                        <StatusBar backgroundColor="transparent" translucent={true} />
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["#F117BE", "#8D0CBA"]}
                            style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={styles.contenttoolbar}>
                                <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }} style={{ justifyContent: 'center' }}>
                                    <Image source={icback} />
                                </TouchableOpacity>
                                <View style={{ flex: 5, alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Top khách sạn</Text>
                                </View>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <Image source={ictim}></Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                        <Image source={icmap}></Image>
                                    </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ backgroundColor: '#f3f5f9' }}>
                        <View style={{ marginTop: 8, }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 12, opacity: 0.5 }}>Sort by : Popular</Text>
                                <TouchableOpacity style={{ marginRight: 10 }} >
                                    <Image source={icsort}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }} onPress={()=>{this.props.navigation.navigate('Findalat');}} >
                                    <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>Fillter</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={DatatopHotel}
                                renderItem={({ item, index }) => {
                                    return (
                                        <ViewtopHotelSeeall
                                            item={item}
                                            index={index}
                                            onPress={()=>{this.props.navigation.navigate('DetailHotel')}}
                                        />
                                    );
                                }}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}