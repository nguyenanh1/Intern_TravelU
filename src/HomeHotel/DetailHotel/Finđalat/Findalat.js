import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    StatusBar,
    FlatList,
} from 'react-native';
import styles from './style';
import icback from '../../../../resource/image/ic_back.png'
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
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Top khách sạn</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ backgroundColor: '#f3f5f9' }}>
                        <View style={{ marginTop: 8, }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Text style={{ flex: 7, fontSize: 15, color: 'black', marginLeft: 12, opacity: 0.5 }}>Sort by : Popular</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            );
    }
}