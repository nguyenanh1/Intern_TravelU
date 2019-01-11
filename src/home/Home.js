import React , {Component} from 'react';
import {
    View
} from 'react-native';
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
import ScreenHome from './screen/ScreenHome/ScreenHome';
import ScreenTab2 from './screen/ScreenTab2/ScreenTab2';
import ScreenTab3 from './screen/ScreenTab3/ScreenTab3';
import ScreenProfile from './screen/ScreenProfile/ScreenProfile';
import Search from './screen/ScreenHome/ScreenHome';

const HomeStack = createStackNavigator({
    Home: ScreenHome,
    Search: Search
},{
    headerMode: 'none'
});

const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Tab2: ScreenTab2,
    Tab3: ScreenTab3,
    Profile: ScreenProfile
});

const AppConatiner = createAppContainer(TabNavigator);

export default class Home extends Component{
    render(){
        return(
            <AppConatiner />
        );
    }
}