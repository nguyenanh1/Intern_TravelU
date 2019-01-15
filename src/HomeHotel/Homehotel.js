import React, { Component } from 'react';
import {
    View, Text, ScrollView, ImageBackground, Image, FlatList, TouchableOpacity
} from 'react-native';
import bghome from '../../resource/image/bghome.png';
import icTravelu from '../../resource/image/ic_travelu.png';
import ring from '../../resource/image/ring.png';
import icSearch from '../../resource/image/ic_search.png';
import icTripplane from '../../resource/image/ic_tripplane.png';
import icAirplane from '../../resource/image/ic_airplane.png';
import icBus from '../../resource/image/ic_bus.png';
import icHotel from '../../resource/image/ic_hotel.png';
import icRestaurent from '../../resource/image/ic_restaurent.png';
import styles from './Style';

export default class Homehotel extends Component {
    render() {
        return (
            <ScrollView>
                <ImageBackground source={bghome} style={styles.bgTop}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                    <View style={styles.toolbar}>
                        <Image source={icTravelu} />
                        <TouchableOpacity style={styles.ring}>
                            <Image source={ring} />
                            <View style={styles.brage}>
                                <Text style={styles.textbrage}>7</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigation.navigate('Search');
                        }}
                        underlayColor="transparent"
                    >
                        <View style={styles.formSearch}>
                            <Text style={styles.hint}>
                                Find Destinations, hotels, restaure, ...
              </Text>
                            <Image source={icSearch} style={styles.icsearch} />
                        </View>
                    </TouchableHighlight>
                    <View style={styles.buttonBar}>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Image source={icTripplane} style={styles.imageButton} />
                                <Text style={styles.textbuton}>Trip plans</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
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
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Image source={icRestaurent} style={styles.imageButton} />
                                <Text style={styles.textbuton}>Restaurents</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Image source={icBus} style={styles.imageButton} />
                                <Text style={styles.textbuton}>Tours</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}