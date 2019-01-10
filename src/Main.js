import React,{Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginOption from './LoginOption/LoginOption'
import Login from './Login/Login'

const RootStack = createStackNavigator(
    {
      LoginOption: {
        screen: LoginOption,
      },
      Login: {
        screen: Login,
      },
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