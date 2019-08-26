import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import HomeScreen from "./screens/home/HomeScreen"
import LoginScreen from "./screens/login/LoginScreen"
import SettingScreen from "./screens/setting/SettingScreen"

const AppTabNav = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Setting: {
            screen: SettingScreen
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            header: null,
            // headerStyle: {
            //   backgroundColor: '#0275d8',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //     fontWeight: 'bold',
            // },
        }
    }
);

const AuthStackNav = createStackNavigator(
    {
        Home: {
            screen: AppTabNav,
        },
        Login: {
            screen: LoginScreen,
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#0275d8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const RootNavigator = createAppContainer(AuthStackNav);

export default RootNavigator;