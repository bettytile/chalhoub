import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/home';
import Categories from '../pages/categories';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import  Detail  from '../pages/detail';
import Profile from '../pages/common/Profile';


import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Svg, {Path} from 'react-native-svg';
const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: '#fff' }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill='#fff'
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: '#fff' }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: '#fff'
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: '#fff'
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        );
    }
}

const Tabs = () => {
    return(
        <Tab.Navigator 
            tabBarOptions={{
                showLabel: false,
                style:{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                    elevation: 0
                }
            }}
           
        >
            <Tab.Screen 
            name="Home"
            component={HomeScreen}
            options={{
                tabBarIcon: ({focused, tintColor}) => {
                    const iconName = 'home';
          return <FontAwesomeIcon name={iconName} size={25} color={focused ? '#EAB72E' : '#bbb'} />
                },
                tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                
            }}
            />
            <Tab.Screen 
            name="Detail"
            component={Detail}
            options={{
                tabBarIcon: ({focused, tintColor}) => {
                    const iconName = 'shopping-cart';
          return <FontAwesomeIcon name={iconName} size={25} color={focused ? '#EAB72E' : '#bbb'} />
                },
                tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                
            }}
            />
            <Tab.Screen 
            name="SignUp"
            component={SignUp}
            options={{
                tabBarIcon: ({focused, tintColor}) => {
                    const iconName = 'heart';
          return <FontAwesomeIcon name={iconName} size={25} color={focused ? '#EAB72E' : '#bbb'} />
                },
                tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                
            }}
            />
            <Tab.Screen 
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon: ({focused, tintColor}) => {
                    const iconName = 'user';
          return <FontAwesomeIcon name={iconName} size={25} color={focused ? '#EAB72E' : '#bbb'} />
                },
                tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                
            }}
            />

        </Tab.Navigator>
        
    )
}

export default Tabs;