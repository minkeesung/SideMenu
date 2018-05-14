import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import { Header } from 'react-native-elements'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={}
//         style={{ width: 30, height: 30 }}
//       />
//     );
//   }
// }

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {}

    return {
      title: 'Home',
      headerLeft: (
        <Button
          onPress={() => navigation.openDrawer()}
          title="SideMenu"
          color="#fff"
        />
      ),
      headerRight: (
        <Button onPress={() => navigation.navigate('Details')} title="details" color="#fff" />
      ),
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

export default HomeScreen
