import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TextInput, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import styles from './style';

export default class Hobbis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stastus: false
        };
    }

    anvaoanh() {
        this.setState({
            status: !this.state.status
        });
    }
    update() {
        this.shouldComponentUpdate(Image = (this.state.stastus));
    }
    signUp() {
        this.props.navigation.navigate('hobbis');
    }

    onProcessChecked = (testID) => {
        if (this.state.status) {
            return (
                <Image
                    testID='phuot'
                    source={require('../../resource/image/ic_check.png')}
                    style={{ position: 'absolute', right: 0 }}>
                </Image> ,
                <Image
                    testID='dulich'
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
                                <TouchableOpacity
                                    onPress={() => { this.anvaoanh(phuot) }}>
                                    <Image source={require('../../resource/image/ic_phuotthu.png')} ></Image>
                                    {this.onProcessChecked()}

                                    <Text style={{ color: 'white', textAlign: 'center' }}>Phượt thủ</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.dong}>
                                <TouchableOpacity onPress={() => { this.anvaoanh(dulich) }}>
                                    <Image source={require('../../resource/image/ic_dulich.png')} ></Image>
                                    {this.onProcessChecked()}
                                    <Text style={{ color: 'white', textAlign: 'center' }}>Du lịch</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.dong}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../resource/image/ic_chupanh.png')} ></Image>
                                    <Image source={require('../../resource/image/ic_check.png')}
                                        style={{ position: 'absolute', right: 0 }}></Image>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>Chụp ảnh</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.cot}>
                            <View style={styles.dong}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../resource/image/ic_hoainiem.png')} ></Image>
                                    <Image source={require('../../resource/image/ic_check.png')}
                                        style={{ position: 'absolute', right: 0 }}></Image>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>Hoài niệm</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.dong}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../resource/image/ic_doinui.png')} ></Image>
                                    <Image source={require('../../resource/image/ic_check.png')}
                                        style={{ position: 'absolute', right: 0 }}></Image>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>Đồi núi</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.dong}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../resource/image/ic_songnuoc.png')} ></Image>
                                    <Image source={require('../../resource/image/ic_check.png')}
                                        style={{ position: 'absolute', right: 0 }}></Image>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>Sông nước</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.cot}>
                            <View style={styles.dong}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../resource/image/ic_cokinh.png')} ></Image>
                                    <Image source={require('../../resource/image/ic_check.png')}
                                        style={{ position: 'absolute', right: 0 }}></Image>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>Cổ kính</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.dong}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../resource/image/ic_mongmo.png')} ></Image>
                                    <Image source={require('../../resource/image/ic_check.png')}
                                        style={{ position: 'absolute', right: 0 }}>
                                    </Image>

                                    <Text style={{ color: 'white', textAlign: 'center' }}>Mộng mơ</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.dong}>
                                <TouchableOpacity onPress={() => { this.anvaoanh() }}>
                                    <Image source={require('../../resource/image/ic_hiendai.png')} ></Image>
                                    <Image source={require('../../resource/image/ic_check.png')}
                                        style={{ position: 'absolute', right: 0 }}></Image>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>Hiện đại</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { }} style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, }}>Đồng ý</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View >
        );
    }

}