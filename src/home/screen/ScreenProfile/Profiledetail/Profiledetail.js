import React, { Component } from 'react';
import {
    View, Text, ScrollView, ImageBackground, Image
} from 'react-native'
export default class Profiledetail extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{ flex: 2 }}>
                        <ImageBackground source={require('../../../../../resource/image/backgrountoplogin.png')}
                            style={{ width: '100%', height: 160 }}>
                            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Image source={require('../../../../../resource/image/ic_back.png')} ></Image>
                                </View>
                                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'left' }}>Tuyen 3d</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <Image source={require('../../../../../resource/image/ic_back.png')} ></Image>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ borderRadius: 10, borderTopWidth: 0.5 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                            <Image source={require('../../../../../resource/image/ic_mongmo.png')}
                                style={{ marginTop: '-10%' }}
                            ></Image>
                        </View>
                        <View style={{}}>
                            <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ flex: 1, borderBottomWidth: 0.5, borderRightWidth: 0.5, borderColor: 'black', height: 60 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>125</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14 }}>Followers</Text>
                                </View>
                                <View style={{ flex: 1, borderBottomWidth: 0.5, borderRightWidth: 0.5, textAlign: 'center', borderColor: 'black', height: 60 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>125</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14 }}>Following</Text>
                                </View>
                                <View style={{ flex: 1, borderBottomWidth: 0.5, textAlign: 'center', borderColor: 'black', height: 60 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>125</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14 }}>Like</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 60 }}>
                                <View style={{ flex: 1, borderRightWidth: 0.5, borderColor: 'black', height: 60 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>125</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14 }}>Photo</Text>
                                </View>
                                <View style={{ flex: 1, borderRightWidth: 0.5, textAlign: 'center', borderColor: 'black', height: 60 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>125</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14 }}>Likes</Text>
                                </View>
                                <View style={{ flex: 1, textAlign: 'center', borderColor: 'black', height: 60 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold' }}>125</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14 }}>Point</Text>
                                </View>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>
                    <View style={{  margin: '5%' }}>
                        <View style={{flexDirection: 'row', flex: 1,}}>
                            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Image source={require('../../../../../resource/image/ic_phuotthu.png')}
                                    style={{ width: 30, height: 30 }} >
                                </Image>
                            </View>
                            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ color: 'black', fontSize: 20, textAlign: 'left' }}>Tuyen 3d</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ color: 'gray', fontSize: 14, }}>Appril 22th</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
