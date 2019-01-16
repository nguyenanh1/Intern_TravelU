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
import datadidiem from '../DiadiemSeeall/DataDiadiem';
import ViewTopdiadiem from '../DiadiemSeeall/ViewTopdiadiem';

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
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Địa điểm phổ biến</Text>
                                </View>                                    
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ backgroundColor: '#f3f5f9' }}>
                        <View style={{ marginTop: 8, }}>
                            <FlatList
                                data={datadidiem}
                                renderItem={({ item, index }) => {
                                    return (
                                        <ViewTopdiadiem
                                            item={item}
                                            index={index}
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