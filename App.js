import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header } from 'react-native-elements'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import ModalScreen from './ModalScreen'
import TestScreen from './TestScreen'

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    //the header config for all the headers now
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);



const RootStack = createDrawerNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Test: {
      screen: TestScreen,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
