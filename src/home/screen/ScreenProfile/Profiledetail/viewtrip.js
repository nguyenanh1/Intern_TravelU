import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';

export default class ViewItemSearch extends Component {

    render() {
        return (

            <View style={{ marginTop: '10%' }}>
                <View style={{ flexDirection: 'row', flex: 1, marginLeft: '5%' }}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Image source={this.props.item.avatar}
                            style={{ width: 30, height: 30 }} >
                        </Image>
                    </View>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: 'black', fontSize: 20, textAlign: 'left' }}>{this.props.item.key}</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text style={{ color: 'gray', fontSize: 14, marginRight: '15%' }}>{this.props.item.date}</Text>
                    </View>
                </View>
                <View style={{ elevation: 1, height: 250, borderRadius: 5, margin: '5%' }}>
                    <ImageBackground source={this.props.item.image} style={{ width: '105%', marginLeft: '-5%', height: 180, }}>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginTop: '-5%' }}>
                            <TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginRight: '2%', borderRadius: 10 }}>...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => { }}
                                style={{ backgroundColor: 'white', width: 75, height: 33, borderRadius: 8, justifyContent: 'center', marginRight: '3%' }}>
                                <Text style={{ color: 'black', textAlign: 'center' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ backgroundColor: 'black', opacity: 0.7, marginLeft: '5%', justifyContent: 'flex-end' }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <Image source={this.props.item.ma}></Image>
                                </View>
                                <View style={{ flex: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold', }}>{this.props.item.name}</Text>
                                    <Text style={{ color: 'white', }}>{this.props.item.diachi}</Text>
                                </View>
                                <View style={{ flex: 3,justifyContent:'center' }}>
                                    <Rating
                                        type="star"
                                        fractions={1}
                                        startingValue={this.props.item.rate}
                                        imageSize={15}
                                        readonly
                                        ratingBackgroundColor='custom'
                                        ratingColor="#FF6600">
                                    </Rating>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <Text style={{ color: 'black', marginTop: '3%', marginLeft: '3%' }}>{this.props.item.content}</Text>
                </View>

            </View>
        );
    }
}