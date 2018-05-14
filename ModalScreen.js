
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import { Header } from 'react-native-elements'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default ModalScreen
