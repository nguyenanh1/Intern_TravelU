import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import starcam from '../../../resource/image/startrang.png'

export default class ViewtopHotelSeeall extends Component {
    changeMoney(props) {
        let money = (props.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')).toString();
        money = money.substring(0, money.length - 3) + 'đ';
        return money; ``````
      }
    render() {
        return (
            <TouchableOpacity style={{ width: '100%', height: 140, marginTop: '2%', justifyContent: 'center', backgroundColor: 'white', }}
            onPress={()=>{this.props.onPress();}}>
                <View style={styles.container}>
                    <View style={{flex:1.5}}>
                    <Image source={this.props.item.source} style={{ width: 120, height: 120, borderRadius: 10 }} />
                    </View>
                    <View style={{ flexDirection: "column", width: 140, marginLeft: 10,flex:2.5 ,marginTop:'2%'}}>
                        <Text style={styles.name}>{this.props.item.nameht}</Text>
                        <View style={{ flexDirection: 'row' ,marginTop:'2%'}}>
                            <Rating
                                type="star"
                                fractions={1}
                                startingValue={this.props.item.ratestar}
                                imageSize={13}
                                style={{marginTop:'2%'}}
                            />
                            <Text style={{ fontSize: 10, color: "#A5A4A4" ,marginTop:'2%'}} >({this.props.item.numberate} Đánh giá)</Text>
                        </View>
                        <Text style={{ opacity: 0.5, fontSize: 12 ,marginTop:'2%'}}> Hotel Star 5 </Text>
                        <View style={{ flexDirection: 'row',flex:1 ,marginTop:'2%'}}>
                            <Text style={{ opacity: 0.5, fontSize: 12 }}>{this.props.item.loaithue}</Text>
                            <Text style={{ opacity: 0.5, color: '#FF6600', fontSize: 12, fontWeight: 'bold', }}>{this.changeMoney(this.props.item.price)}</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center',flex:0.5,marginTop:'2%'}}>
                        <Text style={{ fontSize: 12, color: "#A5A4A4" ,marginLeft:-30}} >{this.props.item.km} Km </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft: 10
    },
    name: {
        color: "#000000",
        fontSize: 13,
        width: 140,
    }
});