import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import ScreenHome from './screen/ScreenHome/ScreenHome';
import ScreenTab2 from './screen/ScreenTab2/ScreenTab2';
import ScreenTab3 from './screen/ScreenTab3/ScreenTab3';
import ScreenProfile from './screen/ScreenProfile/ScreenProfile';
import Profiledetail from './screen/ScreenProfile/Profiledetail/Profiledetail';
import Search from '../Search/Search';

const HomeStack = createStackNavigator (
  {
    Home: ScreenHome,
    Search: Search,
  },
  {
    headerMode: 'none',
  }
);
const Profile = createStackNavigator (
  {
    Profile: ScreenProfile,
    Profiledetail: Profiledetail,
  },
  {
    headerMode: 'none',
  }
);

const TabNavigator = createBottomTabNavigator (
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
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
    Tab3: {
      screen: ScreenTab3,
      navigationOptions: () => ({
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
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
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
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      labelStyle: {
        color: '#FFF',
        fontSize: 10,
      },
      style: {
        backgroundColor: '#191971',
        borderTopColor: '#FFF',
        borderTopWidthWidth: 0.5,
      },
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
