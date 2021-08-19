import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/Material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
//SCREENS
import CreateStory from '../screens/createStory';
import Feed from '../screens/feed';

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name === 'CreateStory') {
            iconName = focused ? 'add-circle' : 'add-circle-outline'
          }
          return <Ionicons name={iconName} size={30} color={color} style={{ width: 30 }} />
        },
      })}
      activeColor={'tomato'}
      inactiveColor={'gray'}  >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreateStory" component={CreateStory} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%", borderTopLeftRadius: 30,
    borderTopRightRadius: 30, overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator
//continue from 82 to 83-10
