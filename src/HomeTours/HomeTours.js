import React, { Component } from 'react';
import {
    View, Text, ScrollView, ImageBackground, Image, FlatList, TouchableOpacity, StatusBar, TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import bghome from '../../resource/image/bghome.png';
import icback from '../../resource/image/ic_back.png'
import icTravelu from '../../resource/image/ic_travelu.png';
import icplace from '../../resource/image/ic_place.png';
import styles from './style';
import { TextInput } from 'react-native-gesture-handler';
import datatours from './DataTours';
import datapl from './DataPlace';
import ViewTours from './ViewTours';
import ViewPlace from './ViewPlace';

export default class Homehotel extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <ImageBackground source={bghome} style={styles.bgTop}>
                        <StatusBar backgroundColor="transparent" translucent={true} />
                        <View style={styles.toolbar}>
                            <TouchableOpacity onPress={() => { this.props.navigation.goBack();}}>
                                <Image source={icback} />
                            </TouchableOpacity>
                            <View style={{ flex: 5, alignItems: 'center' }}><Image source={icTravelu} /></View>
                        </View>

                    </ImageBackground>
                    <View style={{ borderRadius: 10, elevation: 2, width: '96%', height: 150, marginTop: '-22%', marginLeft: '1%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ flex: 0.5 }}></View>
                        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', borderWidth: 0.2, borderRadius: 10, margin: 5, width: '90%' }}>
                            <Image source={icplace} style={{ marginLeft: '2%' }}></Image>
                            <TextInput placeholder='where do you want to go ?' style={{ opacity: 0.5 }} onChangeText={() => { }}></TextInput>
                        </View><TouchableOpacity onPress={() => { }}
                            style={{ flex: 2, alignItems: 'center', borderWidth: 0.2, borderRadius: 10, margin: 5, width: '90%', alignItems: 'center', justifyContent: 'center', }} >
                            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={["#F117BE", "#8D0CBA"]}
                                style={{ width: '100%', height: '100%', alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}                        >

                                <Text style={[{ color: "white", fontSize: 14, fontWeight: "bold" }]}>Find Tours</Text>

                            </LinearGradient></TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 10, marginLeft: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 5 }}>Activity & Tours in Ha Noi </Text>
                        <TouchableOpacity style={{ marginRight: 10 }} >
                            <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>see all</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={datatours}
                        renderItem={({ item, index }) => {
                            return (
                                <ViewTours
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
                <View style={{ marginTop: 10, marginLeft: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 5 }}>Activity & Tours in Kien giang </Text>
                        <TouchableOpacity style={{ marginRight: 10 }} >
                            <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>see all</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={datatours}
                        renderItem={({ item, index }) => {
                            return (
                                <ViewTours
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
                <View style={{ marginTop: 10, marginLeft: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 5 }}>Activity & Tours in Popular Destinasions </Text>
                        <TouchableOpacity style={{ marginRight: 10 }} >
                            <Text style={{ flex: 1, color: '#ED50C6', fontSize: 12 }}>see all</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={datapl}
                        renderItem={({ item, index }) => {
                            return (
                                <ViewPlace
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