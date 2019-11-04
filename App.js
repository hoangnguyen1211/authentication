import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoadingScreen from './src/screens/LoadingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';

const AppContainer = createAppContainer(
  createSwitchNavigator({
    LoadingScreen,
    SignUpScreen,
    LoginScreen,
    MainScreen
  },
  {
    initialRouteName: 'MainScreen'
  })
)

export default function App() {
  return (
    <AppContainer />
  )
}
