import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Message from '../screens/Message/Message';
import LocationTracking from '../screens/LocationTracking/LocationTracking';
import StudentAttend from '../screens/StudentAttend/StudentAttend';
import BusManage from '../screens/BusManage/BusManage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utils/resources/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home">
        {() => (
          <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: COLOR.main_color,
              showLabel: false,
            }}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="ios-home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Message"
              component={Message}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="ios-chatbubbles" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="LocationTracking"
              component={LocationTracking}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="ios-pin" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="StudentAttend"
              component={StudentAttend}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="ios-people" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="BusManage"
              component={BusManage}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="ios-bus" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
