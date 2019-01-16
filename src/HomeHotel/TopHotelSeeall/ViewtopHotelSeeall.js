import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';

export default class ViewtopHotelSeeall extends Component {
    render() {
        return (
            <TouchableOpacity style={{ width: '100%' }}>
                <View style={styles.container}>
                    <Image source={this.props.item.source} style={{ width: 145, height: 100, borderRadius: 5 }} />
                    <Text style={styles.name}>{this.props.item.nameht}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", width: 140, marginLeft: 10 }}>
                        <Rating
                            type="star"
                            fractions={1}
                            startingValue={this.props.item.ratestar}
                            imageSize={13}
                        />
                        <Text style={{ fontSize: 10, color: "#A5A4A4" }} >({this.props.item.numberate} Đánh giá)</Text>
                    </View>
                    <View>
                    <Text style={{ fontSize: 10, color: "#A5A4A4" }} >({this.props.item.km} Km)</Text>
                    </View>
                    <View style={{ flexDirection: "row", width: 140, marginLeft: 10 }}>
                        <Text style={{ flex: 1, opacity: 0.5, fontSize: 10 }}>{this.props.item.loaithue}</Text>
                        <Text style={{ flex: 1, opacity: 0.5, color: '#FF6600', fontSize: 12, fontWeight: 'bold', alignItems: 'flex-end' }}>{this.props.item.price} đ</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    name: {
        color: "#000000",
        fontSize: 13,
        width: 140,
        marginLeft: 10
    }
});