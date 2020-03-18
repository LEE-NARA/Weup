import React from 'react';
import firebaseKeys from './config'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

//login navigation
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

//tab navigation
import WorldScreen from './screens/WorldScreen';
import PostScreen from './screens/PostScreen';
import MissionScreen from './screens/MissionScreen';
import MypageScreen from './screens/MypageScreen';

import * as firebase from "firebase";



const AppContainer = createStackNavigator(
    {
        default: createBottomTabNavigator({
                Home:{
                    screen:HomeScreen,
                    navigationOptions:{
                        tabBarIcon:({tintColor})=>
                        <Ionicons 
                            name="ios-home" size={24} 
                            color={tintColor}>  
                        </Ionicons>
                    }
                },
                World:{
                    screen:WorldScreen,
                    navigationOptions:{
                        tabBarIcon:({tintColor})=>
                        <Ionicons 
                            name="ios-chatboxes" size={24} 
                            color={tintColor}>  
                        </Ionicons>
                    }
                },
                Post:{
                    screen:PostScreen,
                    navigationOptions:{
                        tabBarIcon:({tintColor})=>
                        <Ionicons 
                            name="ios-add-circle" 
                            size={48} 
                            color="#fd2845" 
                            style={{
                                shadowColor:"#E9446A", 
                                shadowOffset:{width:0, height:0},
                                shadowRadius:10,
                                shadowOpacity:0.3
                            }}>  
                        </Ionicons>
                    }
                },
                Mission:{
                    screen:MissionScreen,
                    navigationOptions:{
                        tabBarIcon:({tintColor})=>
                        <Ionicons 
                            name="ios-notifications" size={24} 
                            color={tintColor}>  
                        </Ionicons>
                    }
                },
                Mypage:{
                    screen:MypageScreen,
                    navigationOptions:{
                        tabBarIcon:({tintColor})=>
                        <Ionicons 
                            name="ios-person" size={24} 
                            color={tintColor}>  
                        </Ionicons>
                    }
                }
            },
            {
                defaultNavigationOptions: {
                    tabBarOnPress: ({ navigation, defaultHandler }) => {
                    if (navigation.state.key === "Post") {
                    navigation.navigate("postModal")
                    } else {
                    defaultHandler();
                    }
                }
            },
                tabBarOptions:{
                    activeTintColor:"#fd2845",
                    inactiveTintColor:"#B8BBC4",
                    showLabel: false
                }
        }),
            postModal: {
            screen: PostScreen
        }
    },
    {
        mode: "modal",
        headerMode: "none",
})


const AuthStack = createStackNavigator({
    Login:LoginScreen,
    Register:RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading:LoadingScreen,
            App:AppContainer,
            Auth:AuthStack
        },
        {
            initialRouteName:"Loading"
        }
    )
);