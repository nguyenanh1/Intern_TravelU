import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient'

export default class Hobbis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stastus: false,
            id: ''
        };
    }
    anvaoanh = (d) => {
        this.setState({
            status: !this.state.status,
            id: d
        });
    }
    onProcessChecked = (id) => {
        if (this.state.status) {
            return (
                <Image
                    testID='{this.state.id}'
                    source={require('../../resource/image/ic_check.png')}
                    style={{ position: 'absolute', right: 0 }}>
                </Image>
            );
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../../resource/image/backgrounlogin.png')}
                    style={{ width: '100%', height: '100%' }}>
                    <View style={styles.top}>
                        <View>
                            <TouchableOpacity style={{ marginTop: '5%' }} onPress={() => { this.props.navigation.navigate("LoginOption") }}>
                                <Text style={[{ color: "white", fontSize: 15, fontWeight: "bold", textAlign: 'right' }]}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('../../resource/image/logo.png')}></Image>
                        </View>
                        <Text style={{ textAlign: 'center', marginHorizontal: '10%', color: 'white' }}>Hệ thống sẽ dựa vào những sở thích của bạn để đưa ra những gợi ý hợp lý</Text>
                    </View>
                    <View style={styles.list}>
                        <View style={styles.cot}>
                            <View style={styles.dong}>
                                <TouchableHighlight onPress={() => { this.anvaoanh() }} underlayColor="transparent">
                                    <View>
                                        <Image source={require('../../resource/image/ic_phuotthu.png')} ></Image>
                                        {this.onProcessChecked()}
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Phượt thủ</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.dong}>
                                <TouchableHighlight onPress={() => { this.anvaoanh() }} underlayColor="transparent">
                                    <View>
                                        <Image source={require('../../resource/image/ic_dulich.png')} ></Image>
                                        {this.onProcessChecked()}
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Du lịch</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.dong}>
                                <TouchableHighlight onPress={() => { this.anvaoanh() }} underlayColor="transparent">
                                    <View>
                                        <Image source={require('../../resource/image/ic_chupanh.png')} ></Image>
                                        {this.onProcessChecked()}
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Chụp ảnh</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.cot}>
                            <View style={styles.dong}>
                                <TouchableHighlight onPress={() => { this.anvaoanh() }} underlayColor="transparent">
                                    <View>
                                        <Image source={require('../../resource/image/ic_hoainiem.png')} ></Image>
                                        {this.onProcessChecked()}
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Hoài niệm</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.dong}>
                                <TouchableHighlight onPress={() => { this.anvaoanh(2) }} underlayColor="transparent">
                                    <View>
                                        <Image source={require('../../resource/image/ic_doinui.png')} ></Image>
                                        {this.onProcessChecked(2)}
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Đồi núi</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.dong}>
                                <TouchableHighlight onPress={() => { this.anvaoanh(1) }} underlayColor="transparent">
                                    <View>
                                        <Image source={require('../../resource/image/ic_songnuoc.png')} ></Image>
                                        {this.onProcessChecked(1)}
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Sông nước</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.cot}>
                            <View style={styles.dong}>
                                <TouchableHighlight onPress={() => { this.anvaoanh() }} underlayColor="transparent">
                                    <View>
                                        <Image source={require('../../resource/image/ic_cokinh.png')} ></Image>
                                        {this.onProcessChecked()}
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Cổ kính</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.dong}>
                                <TouchableHighlight onPress={() => { this.anvaoanh('2') }} underlayColor="transparent">
                                    <View>
                                        <Image source={require('../../resource/image/ic_mongmo.png')} ></Image>
                                        {this.onProcessChecked('2')}
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Mộng mơ</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.dong}>
                                <TouchableHighlight onPress={() => { this.anvaoanh('1') }} underlayColor="transparent">
                                    <View>
                                        <Image source={require('../../resource/image/ic_hiendai.png')} ></Image>
                                        {this.onProcessChecked('1')}
                                        <Text style={{ color: 'white', textAlign: 'center' }}>Hiện đại</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <TouchableHighlight onPress={() => { }} underlayColor="transparent"
                        style={{ flex: 1 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }} colors={["#F117BE", "#8D0CBA"]}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, }}>Đồng ý</Text>
                        </LinearGradient>
                    </TouchableHighlight>
                </ImageBackground>
            </View >
        );
    }

}