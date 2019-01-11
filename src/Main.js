import React,{Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginOption from './LoginOption/LoginOption'
import Login from './Login/Login'
import Register from './Regsiter/Regsiter'
import Hobbis from './hobbis/Hobbis';
import Home from './home/Home';

const RootStack = createStackNavigator(
    {
      LoginOption: {
        screen: LoginOption,
      },
      Login: {
        screen: Login,
      },
      Register: {
          screen: Register
      },
      Home:{
        screen: Home
      },
      HobbisScreen:{
          screen: Hobbis
      }
    },
    {
       headerMode: 'none',
       initialRouteName: 'LoginOption',
    }
  );
  
const AppContainer = createAppContainer(RootStack);

export default class Main extends Component{
    render(){
        return(
            <AppContainer />
        );
    }
}