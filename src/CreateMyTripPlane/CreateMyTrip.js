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
  ToastAndroid,
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
      from: '',
      to: '',
      dateForm: null,
      dateFormText: '',
      dateTo: null,
      dateToText: '',
      privateValue: false,
    };
  }
  name () {
    let from = this.state.from;
    let to = this.state.to;
    let dateFrom = this.state.dateForm;
    let dateTo = this.state.dateTo;
    var timeDiff;
    var diffDays;
    if (dateFrom != null && dateTo != null) {
      timeDiff = Math.abs (dateTo.getTime () - dateFrom.getTime ());
      diffDays = Math.ceil (timeDiff / (1000 * 3600 * 24));
    }
    if (from == '' || to == '' || diffDays == null) {
      return '';
    } else {
      return diffDays + ' days to ' + to + ' from ' + from;
    }
  }
  getDate (day, month, year) {
    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    let today = day + '/' + month + '/' + year;
    return today;
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
  pickFrom = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open ({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date (),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState ({
          dateForm: new Date (year, month, day),
          dateFormText: this.getDate (day, month + 1, year),
        });
      }
    } catch ({code, message}) {
      console.warn ('Cannot open date picker', message);
    }
  };
  pickTo = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open ({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date (),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState ({
          dateTo: new Date (year, month, day),
          dateToText: this.getDate (day, month + 1, year),
        });
      }
    } catch ({code, message}) {
      console.warn ('Cannot open date picker', message);
    }
  };
  changeSwitch () {
    getValuePrivate = this.state.privateValue;
    this.setState ({
      privateValue: !getValuePrivate,
    });
  }
  nextStep () {
    // let from = this.state.from;
    // let to = this.state.to;
    // let dateFrom = this.state.dateForm;
    // let dateTo = this.state.dateTo;
    // var timeDiff;
    // var diffDays;
    // if (dateFrom != null && dateTo != null) {
    //   timeDiff = Math.abs (dateTo.getTime () - dateFrom.getTime ());
    //   diffDays = Math.ceil (timeDiff / (1000 * 3600 * 24));
    // }
    // if (from == '' || to == '' || diffDays == null) {
    //   ToastAndroid.show ('Chưa chọn xong', ToastAndroid.SHORT);
    // } else {
    //   this.props.navigation.navigate ('AddPlace');
    // }
    this.props.navigation.navigate ('AddPlace');
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
                {this.name ()}
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
                {this.state.dateFormText}
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {
              this.pickTo ();
            }}
          >
            <View style={[styles.name, {marginTop: 5}]} elevation={5}>
              <View style={{marginLeft: 10, flex: 1}}>
                <Image
                  source={require ('../../resource/image/ic_calendar.png')}
                />
              </View>
              <Text style={styles.titlename}>Ngày quay lại</Text>
              <Text style={styles.namecontainer}>
                {this.state.dateToText}
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
            this.nextStep ();
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
