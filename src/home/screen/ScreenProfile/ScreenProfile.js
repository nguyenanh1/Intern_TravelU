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
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 14, marginTop: '10%' }}>My Profile</Text>
                    </LinearGradient>
                </View>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profiledetail') }} underlayColor="transparent"
                    style={{ flex: 4, flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 0.5, borderColor: 'black' }}>
                    <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../../../../resource/image/ic_hiendai.png')} style={{ width: 65, height: 65 }} ></Image>
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center' }}>                        
                            <Text style={{ textAlign: 'left', color: 'black',fontFamily:'Roboto', fontSize: 14 }}>Tuyen 3d</Text>                        
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>                        
                            <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                    </View>
                </TouchableOpacity>

                <View style={{ flex: 12, marginTop: '2%', backgroundColor: 'white', borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: 'black' }}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1.4, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/addplace.png')} style={{}} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Text style={{ textAlign: 'left', fontFamily:'Roboto', fontSize: 14, color: 'black' }}>Add a place</Text></TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, borderBottomColor: 'black', borderBottomWidth: 0.5, flexDirection: 'row' }}>
                        <View style={{ flex: 1.4, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/mylove.png')} style={{}} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Text style={{ textAlign: 'left', fontFamily:'Roboto', fontSize: 14, color: 'black' }}>My Love</Text></TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1.4, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/ratetravelu.png')} style={{}} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}><TouchableOpacity onPress={() => { }} underlayColor="transparent" >
                            <Text style={{ textAlign: 'left', fontFamily:'Roboto', fontSize: 14, color: 'black' }}>Rate TravelU</Text></TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1.4, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/findfriend.png')} style={{}} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left',fontFamily:'Roboto', fontSize: 14, color: 'black' }}>Find Friends</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1.4, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/downplan.png')} style={{}} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left',fontFamily:'Roboto', fontSize: 14, color: 'black' }}>Download a Plan</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>

                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, borderBottomColor: 'black', borderBottomWidth: 0.5, flexDirection: 'row' }}>
                        <View style={{ flex: 1.4, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/downplace.png')} style={{}} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left', fontFamily:'Roboto', fontSize: 14, color: 'black' }}>Download place</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                            
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1.4, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../../../resource/image/setttingpink.png')} style={{}} ></Image>
                        </View>
                        <View style={{ flex: 10, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'left',fontFamily:'Roboto', fontSize: 14, color: 'black' }}>Setting</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%' }}>
                                <Image source={require('../../../../resource/image/ic_arrow.png')} style={{}} ></Image>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 3 }}>

                </View>
            </View>
        );
    }
}