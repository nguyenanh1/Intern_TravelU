import React, {Component} from 'react';
import {View, StatusBar, Text, TouchableHighlight, Image} from 'react-native';
import Timeline from 'react-native-timeline-listview';
import styles from './style';
import data from './dataplan';
import Rating from 'react-native-elements';
export default class Ngay1 extends Component {
  constructor (props) {
    super (props);
    this.renderDetail = this.renderDetail.bind (this);
  }
  changeMoney (props) {
    let money = props
      .toFixed (2)
      .replace (/\d(?=(\d{3})+\.)/g, '$&,')
      .toString ();
    money = money.substring (0, money.length - 3) + 'đ';
    return money;
    ``````;
  }
  renderDetail (rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.type == 'car') {
      desc = (
        <View>
          <Text>{rowData.des}</Text>
        </View>
      );
    } else {
      desc = (
        <View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image source={rowData.image} style={{width: 90, height: 90}} />

            </View>

            <View style={{flex: 3}}>
              <Text style={{color: '#000', fontFamily: 'Roboto', fontSize: 14}}>
                {rowData.des}
              </Text>
              <View style={{flexDirection: 'row', margin: 3}}>
                {/* <Rating
                  type="star"
                  fractions={1}
                  startingValue={3}
                  imageSize={10}
                /> */}
                <Text
                  style={{
                    fontSize: 10,
                    color: '#A5A4A4',
                    fontFamily: 'Roboto Regular',
                  }}
                >
                  ({rowData.numrate} đánh giá)
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', margin: 3, alignItems: 'center'}}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Roboto Regular',
                    color: '#313131',
                    opacity: 0.5,
                  }}
                >
                  Hotel star{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Roboto Regular',
                    color: '#313131',
                    opacity: 0.5,
                  }}
                >
                  {rowData.hothelStar}
                </Text>
                <Image
                  style={{marginBottom: 10}}
                  source={require ('../../resource/image/ic_star.png')}
                />
              </View>
              <View
                style={{flexDirection: 'row', margin: 3, alignItems: 'center'}}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Roboto Regular',
                    color: '#000',
                    opacity: 0.5,
                  }}
                >
                  Per night{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Roboto Regular',
                    color: '#FF5526',
                  }}
                >
                  {this.changeMoney (rowData.pernight)}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Image
                source={require ('../../resource/image/ic_trash.png')}
                style={{}}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#DBDADA',
                borderRadius: 5,
                margin: 5,
              }}
            >
              <Image source={require ('../../resource/image/ic_clock.png')} />
              <Text>Ghi chú</Text>
              <Image
                source={require ('../../resource/image/ic_arrowdow.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#DBDADA',
                borderRadius: 5,
                margin: 5,
              }}
            >
              <Image source={require ('../../resource/image/ic_clock.png')} />
              <Text>Ghi chú</Text>
              <Image
                source={require ('../../resource/image/ic_arrowdow.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#DBDADA',
                borderRadius: 5,
                margin: 5,
              }}
            >
              <Image source={require ('../../resource/image/ic_clock.png')} />
              <Text>Ghi chú</Text>
              <Image
                source={require ('../../resource/image/ic_arrowdow.png')}
              />
            </View>
          </View>
        </View>
      );
    }
    return (
      <View>
        {desc}
      </View>
    );
  }
  render () {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        <View
          style={{
            marginLeft: 17,
            marginRight: 17,
            flexDirection: 'row',
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 0.2,
            borderBottomColor: '#707070',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}
            >
              Ngày 1
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#000',
                fontFamily: 'Roboto',
                opacity: 0.47,
              }}
            >
              23/10/2018
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}
            >
              Số Km
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#000',
                fontFamily: 'Roboto',
                opacity: 0.47,
              }}
            >
              9.8 km
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}
            >
              Số địa điểm
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#000',
                fontFamily: 'Roboto',
                opacity: 0.47,
              }}
            >
              4 places
            </Text>
          </View>
        </View>
        <Timeline
          style={styles.list}
          data={data}
          circleSize={20}
          circleColor="rgba(0,0,0,0)"
          lineColor="#E23776"
          options={{
            style: {paddingTop: 5},
          }}
          innerCircle={'icon'}
          renderDetail={this.renderDetail}
          timeStyle={{marginTop: 20}}
        />
      </View>
    );
  }
}
