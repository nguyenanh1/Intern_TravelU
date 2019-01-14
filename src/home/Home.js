import React, {Component} from 'react';
import {View, Image, StyleSheet, Text } from 'react-native';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import ScreenHome from './screen/ScreenHome/ScreenHome';
import ScreenTab2 from './screen/ScreenTab2/ScreenTab2';
import ScreenTab3 from './screen/ScreenTab3/ScreenTab3';
import CreateMyTrip from '../CreateMyTripPlane/CreateMyTrip'
import ScreenProfile from './screen/ScreenProfile/ScreenProfile';
import Profiledetail from './screen/ScreenProfile/Profiledetail/Profiledetail';
import Search from '../Search/Search';

const HomeStack = createStackNavigator (
  {
    Home: {
      screen: ScreenHome,
    },Search:{
       screen: Search,
    }
    
  },
  {
    headerMode: 'none',
  }
);

HomeStack.navigationOptions=({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
      tabBarVisible = false;
  }
  return {
      tabBarVisible,
  };
}

const Profile = createStackNavigator (
  {
    Home: {
      screen: ScreenProfile,
    },Profiledetail:{
       screen: Profiledetail,
    },Profile:{
      screen:ScreenProfile
    }
  },
  {
    headerMode: 'none',
  }
);
Profile.navigationOptions=({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
      tabBarVisible = false;
  }
  return {
      tabBarVisible,
  };
}
class ButtonTrip extends Component{
  render(){
    return(
      <View style={{position:"absolute",top: -25, flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Image source={require("../../resource/image/ic_createtrip.png")}/>
        <Text style={{color:"#F36BDD", fontSize: 11}}>Create trip plane</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator (
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({focused}) =>
          focused
            ? <Image
                source={require ('../../resource/image/ic_home.png')}
                style={styles.tabIcon}
              />
            : <Image
                source={require ('../../resource/image/ic_home_disabled.png')}
                style={styles.tabIcon}
              />,
      }),
    },
    Tab2: {
      screen: ScreenTab2,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) =>
          focused
            ? <Image
                source={require ('../../resource/image/ic_file.png')}
                style={styles.tabIcon}
              />
            : <Image
                source={require ('../../resource/image/ic_file_disable.png')}
                style={styles.tabIcon}
              />, 
      }),
    },
    CreateTrip: {
      screen: CreateMyTrip,
      navigationOptions: () => ({
        tabBarIcon: <ButtonTrip />
      }), 
    },
    Tab3: {
      screen: ScreenTab3,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) =>
          focused
            ? <Image
                source={require ('../../resource/image/ic_music.png')}
                style={styles.tabIcon}
              />
            : <Image
                source={require ('../../resource/image/ic_music_disable.png')}
                style={styles.tabIcon}
              />,
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) =>
          focused
            ? <Image
                source={require ('../../resource/image/ic_profile.png')}
                style={styles.tabIcon}
              />
            : <Image
                source={require ('../../resource/image/ic_profile_disable.png')}
                style={styles.tabIcon}
              />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel:false
    },
  }
);

const AppConatiner = createAppContainer (TabNavigator);
export default AppConatiner;

// export default class Home extends Component {
//   render () {
//     return <AppConatiner />;
//   }
// }
const styles = StyleSheet.create ({
  tabIcon: {
    marginTop: 10,
    width: 20,
    height: 20,
  },
});
