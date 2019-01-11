import React, { Component } from 'react';
import {
    View, Text, ScrollView, ImageBackground,Image
} from 'react-native'
export default class Profiledetail extends Component {
    render() {
        return (
            <ScrollView>
                <View >
                <ImageBackground source={require('../../../../../resource/image/backgrounlogin.png')} style={{width:'100%',height:'100%'}}>
                    <Text>eeeeeeeeeeeeeeeeeee</Text>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    <Image source={require('../../../../../resource/image/ic_hiendai.png')}></Image>
                    
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}
