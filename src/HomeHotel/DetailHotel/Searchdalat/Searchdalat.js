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
import LinearGradient from 'react-native-linear-gradient';
import icTripplane from '../.././../../resource/image/ic_tripplane.png';
import icAirplane from '../../../../resource/image/ic_airplane.png';
import icBus from '../../../../resource/image/ic_bus.png';
import icHotel from '../../../../resource/image/ic_hotel.png';
import icback from '../../../../resource/image/ic_back.png';
import icRestaurent from '../../../../resource/image/ic_restaurent.png';
import icsearch from '../../../../resource/image/ic_search.png';
import { TextInput } from 'react-native-gesture-handler';

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
                                <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }} style={{flex:0.5 ,justifyContent: 'center' }}>
                                    <Image source={icback} />
                                </TouchableOpacity>
                                <View style={{ flex: 10,}}>                                
                                        <View style={styles.formSearch}> 
                                        <TextInput  placeholder="What do you search in Đà Lạt" style={{}}></TextInput>                                       
                                            <Image source={icsearch} style={styles.icsearch} />
                                        </View>                                    
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={styles.buttonBar}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('TripPlan'); }}>
                            <View style={styles.button}>
                                <Image source={icTripplane} style={styles.imageButton} />
                                <Text style={styles.textbuton}>Trip plans</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Homehotel'); }}>
                            <View style={styles.button}>
                                <Image source={icHotel} style={styles.imageButton} />
                                <Text style={styles.textbuton}>Hotels</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Image source={icAirplane} style={styles.imageButton} />
                                <Text style={styles.textbuton}>Flights</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('HomeRestaurant');
                            }}>
                            <View style={styles.button}>
                                <Image source={icRestaurent} style={styles.imageButton} />
                                <Text style={styles.textbuton}>Restaurents</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('HomeTours');
                            }}>
                            <View style={styles.button}>
                                <Image source={icBus} style={styles.imageButton} />
                                <Text style={styles.textbuton}>Tours</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}