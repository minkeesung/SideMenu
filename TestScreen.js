import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import { Header } from 'react-native-elements'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';


class TestScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {}

    return {
      title: 'Test',
      headerLeft: (
        <Button
          onPress={() => navigation.openDrawer()}
          title="Info"
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
        <Text>Test Screen</Text>
        <Button onPress={() => this.props.navigation.openDrawer()} title="Open SideMenu" />
      </View>
    );
  }
}

export default TestScreen
