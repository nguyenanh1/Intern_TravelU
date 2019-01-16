import React, { Component } from 'react';
import {
    View, Text, ScrollView, ImageBackground, Image, FlatList, TouchableOpacity
} from 'react-native';
import data from './datatrip';
import Viewtrip from './viewtrip';

export default class Profiledetail extends Component {
    static navigationOptions = {
        tabBarVisible: false
    };
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{ flex: 2 }}>
                        <ImageBackground source={require('../../../../../resource/image/backgrountoplogin.png')}
                            style={{ width: '100%', height: 160, overflow:"hidden" }}>
                            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <TouchableOpacity onPress={() => {  this.props.navigation.goBack(); }}>
                                        <Image source={require('../../../../../resource/image/ic_back.png')} ></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'left' }}>Tuyen 3d</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <TouchableOpacity >
                                        <Image source={require('../../../../../resource/image/settinhwhite.png')} style={{marginRight:10}} ></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ borderRadius: 20, elevation: 2,marginTop:-30 ,backgroundColor:'white'}}>
                        <View >
                            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                <Image source={require('../../../../../resource/image/ic_mongmo.png')}
                                    style={{ marginTop: '-10%' ,width:80,height:80}}
                                ></Image>
                            </View>
                            <View style={{}}>
                                <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <View style={{ flex: 1, borderBottomWidth: 0.5, borderRightWidth: 0.5, borderColor: 'black', height: 60 ,alignItems:'center'}}>
                                        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold',color:'black' }}>125</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 11 ,opacity:0.8}}>Followers</Text>
                                    </View>
                                    <View style={{ flex: 1, borderBottomWidth: 0.5, borderRightWidth: 0.5, textAlign: 'center', borderColor: 'black', height: 60 ,alignItems:'center'}}>
                                        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold',color:'black' }}>150</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 11,opacity:0.8 }}>Following</Text>
                                    </View>
                                    <View style={{ flex: 1, borderBottomWidth: 0.5, textAlign: 'center', borderColor: 'black', height: 60 ,alignItems:'center'}}>
                                        <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold',color:'black'  }}>321</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 12,opacity:0.8 }}>Like</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60,alignItems:'center' }}>
                                    <View style={{ flex: 1, borderRightWidth: 0.5, borderColor: 'black', height: 60 }}>
                                        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold',color:'black' }}>12</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 12 ,opacity:0.8}}>Photo</Text>
                                    </View>
                                    <View style={{ flex: 1, borderRightWidth: 0.5, textAlign: 'center', borderColor: 'black', height: 60 ,alignItems:'center'}}>
                                        <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold',color:'black' }}>3</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 12,opacity:0.8 }}>Likes</Text>
                                    </View>
                                    <View style={{ flex: 1, textAlign: 'center', borderColor: 'black', height: 60 ,alignItems:'center'}}>
                                        <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold',color:'black'  }}>100</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 12,opacity:0.8 }}>Point</Text>
                                    </View>
                                </View>
                                <View></View>
                            </View>
                        </View>
                        <View style={{}}>
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => {
                                    return (
                                        <Viewtrip item={item} index={index} />
                                    );
                                }}
                            />
                        </View></View>
                </ScrollView>
            </View>
        );
    }
}
