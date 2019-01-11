import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient'

export default class ScreeProfile extends Component {
    render() {
        return (
            <View style={styles.khung}>
                <View style={{ flex: 2.5 }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} colors={["#F117BE", "#8D0CBA"]}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 14,marginTop:'10%' }}>My Profile</Text>
                    </LinearGradient>
                </View>
                <View style={{ flex: 2.5, flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 0.5, borderColor: 'black' }}>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../../../../resource/image/ic_hiendai.png')} style={{ width: '80%', height: '80%' }} ></Image>
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'left', fontSize: 14, color: 'black' }}>Tuyen 3d</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profiledetail')}} underlayColor="transparent" >
                            <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 8, marginTop: '2%', backgroundColor: 'white', borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: 'black' }}>
                    <View style={{ flex: 1,flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/ic_location.png')} style={{ width: '80%', height: '80%' }} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left', fontSize: 14, color: 'black' }}>Add a place</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1,borderBottomColor: 'black', borderBottomWidth: 0.5,flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/ic_location.png')} style={{ width: '80%', height: '80%' }} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left', fontSize: 14, color: 'black' }}>My Love</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => {}} underlayColor="transparent" >
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1,flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/ic_location.png')} style={{ width: '80%', height: '80%' }} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left', fontSize: 14, color: 'black' }}>Rate TravelU</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1,flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/ic_location.png')} style={{ width: '80%', height: '80%' }} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left', fontSize: 14, color: 'black' }}>Find Friends</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1,flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/ic_location.png')} style={{ width: '80%', height: '80%' }} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left', fontSize: 14, color: 'black' }}>Download a Plan</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1,borderBottomColor: 'black', borderBottomWidth: 0.5,flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/ic_location.png')} style={{ width: '80%', height: '80%' }} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left', fontSize: 14, color: 'black' }}>Download place</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1,flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/ic_location.png')} style={{ width: '80%', height: '80%' }} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left', fontSize: 14, color: 'black' }}>Setting</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={{ flex: 3 }}>

                </View>
            </View>
        );
    }
}