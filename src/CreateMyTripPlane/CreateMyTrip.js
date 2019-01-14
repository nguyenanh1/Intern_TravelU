import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableHighlight,
  TextInput,
  Switch,
  DatePickerAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
export default class CreateMyTripPlane extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };
  constructor (props) {
    super (props);
    this.state = {
      getDateNow: () => {
        var today = new Date ();
        var dd = today.getDate ();
        var mm = today.getMonth () + 1; //January is 0!
        var yyyy = today.getFullYear ();
        if (dd < 10) {
          dd = '0' + dd;
        }

        if (mm < 10) {
          mm = '0' + mm;
        }

        today = dd + '/' + mm + '/' + yyyy;
        return today;
      },
      from: '',
      to: '',
      name: () => {
        let from = this.state.from;
        let to = this.state.to;
        if (from == '' || to == '') {
          return '';
        } else {
          return '3 days to ' + to + ' from ' + from;
        }
      },
      privateValue: false,
    };
  }
  changeTo (text) {
    this.setState ({
      to: text,
    });
  }
  changeFrom (text) {
    this.setState ({
      from: text,
    });
  }
  pickFrom () {
    try {
      const {action, year, month, day} = DatePickerAndroid.open ({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date (2020, 4, 25),
      });
      if (action === DatePickerAndroid.dateSetAction) {
      }
    } catch ({code, message}) {
      console.warn ('Cannot open date picker', message);
    }
  }
  changeSwitch () {
    getValuePrivate = this.state.privateValue;
    this.setState ({
      privateValue: !getValuePrivate,
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#F117BE', '#8D0CBA']}
        >
          <View style={styles.toolbar}>
            <TouchableHighlight
              underlayColor="transparent"
              style={styles.icback}
              onPress={() => {
                this.props.navigation.goBack ();
              }}
            >
              <Image source={require ('../../resource/image/ic_back.png')} />
            </TouchableHighlight>
            <Text style={[styles.title]}>Create trip plan</Text>
          </View>
        </LinearGradient>
        <View style={[[styles.main]]}>
          <TouchableHighlight underlayColor="transparent">
            <View style={[styles.name, {marginTop: 15}]} elevation={5}>
              <View style={{marginLeft: 10, flex: 1}}>
                <Image
                  source={require ('../../resource/image/ic_traveler.png')}
                />
              </View>
              <Text style={styles.titlename}>Plan name</Text>
              <Text style={styles.namecontainer}>
                {this.state.name ()}
              </Text>
            </View>
          </TouchableHighlight>
          <View style={styles.fromto} elevation={5}>
            <View style={styles.imgfromto}>
              <Image source={require ('../../resource/image/ic_fromto.png')} />
            </View>
            <View style={styles.formfromto}>
              <View style={[styles.formNhap, {marginTop: 5}]}>
                <View style={styles.formNhapTitle}>
                  <Text>Từ</Text>
                </View>
                <View style={{flex: 9}}>
                  <TextInput
                    style={{textAlign: 'right'}}
                    onChangeText={text => {
                      this.changeFrom (text);
                    }}
                  />
                </View>

              </View>
              <View style={[styles.formNhap, {marginTop: 30}]}>
                <View style={{flex: 1}}>
                  <Text>Đến</Text>
                </View>
                <View style={{flex: 9}}>
                  <TextInput
                    style={{textAlign: 'right'}}
                    onChangeText={text => {
                      this.changeTo (text);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <TouchableHighlight
            onPress={() => {
              this.pickFrom ();
            }}
            underlayColor="transparent"
          >
            <View style={[styles.name, {marginTop: 5}]} elevation={5}>
              <View style={{marginLeft: 10, flex: 1}}>
                <Image
                  source={require ('../../resource/image/ic_calendar.png')}
                />
              </View>
              <Text style={styles.titlename}>Ngày bắt đầu</Text>
              <Text style={styles.namecontainer}>
                {this.state.getDateNow ()}
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="transparent">
            <View style={[styles.name, {marginTop: 5}]} elevation={5}>
              <View style={{marginLeft: 10, flex: 1}}>
                <Image
                  source={require ('../../resource/image/ic_calendar.png')}
                />
              </View>
              <Text style={styles.titlename}>Ngày quay lại</Text>
              <Text style={styles.namecontainer}>
                {this.state.getDateNow ()}
              </Text>
            </View>
          </TouchableHighlight>
          <View underlayColor="transparent">
            <View style={[styles.name, {marginTop: 5}]} elevation={5}>
              <View style={{marginLeft: 10, flex: 1}}>
                <Image source={require ('../../resource/image/ic_lock.png')} />
              </View>
              <Text
                style={{
                  flex: 2,
                  fontFamily: 'Roboto regular',
                  fontSize: 13,
                  color: '#313131',
                  opacity: 0.5,
                }}
              >
                Private?
              </Text>
              <View
                style={{flex: 6, alignItems: 'center', flexDirection: 'row'}}
              >
                <Text
                  style={{
                    fontFamily: 'Roboto regular',
                    fontSize: 13,
                    color: '#313131',
                    marginRight: 10,
                  }}
                >
                  Mark a trip as private
                </Text>
                <View style={{flex: 1}}>
                  <Switch
                    value={this.state.privateValue}
                    onValueChange={() => {
                      this.changeSwitch ();
                    }}
                  />
                </View>
              </View>

            </View>
          </View>
        </View>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate ('AddPlace');
          }}
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        >
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#F117EA', '#DC444A']}
            style={styles.nextstep}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                color: '#FFF',
              }}
            >
              Next step
            </Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    );
  }
}
