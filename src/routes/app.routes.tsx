import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Clock } from 'phosphor-react-native';
import { Chats } from 'phosphor-react-native';
import { House } from 'phosphor-react-native';
import { Files } from 'phosphor-react-native';
import { UserCircle } from 'phosphor-react-native';

import   Feed  from '../../src/screens/Feed';
import  Grades  from '../../src/screens/Grades';
import  Noticeboard  from '../../src/screens/Noticeboard';
import  Schedule  from '../../src/screens/Schedule';
import  User  from '../../src/screens/User';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator
        initialRouteName='Feed'
         screenOptions={{
             headerShown: false,
             tabBarActiveTintColor: '#0439D9', 
             tabBarInactiveTintColor: '#000',
             tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 0,
           
            },

            }
        }>
            <Screen
               name="Horário"
               component={Schedule}
               options={{ tabBarIcon: ({color, size}) => (<Clock />),  }}
            />
               
            <Screen
                name="Avisos"
                component={Noticeboard}
                options={{ tabBarIcon: ({color, size}) => (<Chats />), }}
            />

            <Screen
               name="Feed"
               component={Feed}
               options={{ tabBarIcon: ({color, size}) => (<House />), }}
            />

            <Screen
               name="Conceitos"
               component={Grades}
               options={{ tabBarIcon: ({color, size}) => (<Files />), }}
            />

            <Screen
               name="Perfil"
               component={User}
               options={{ tabBarIcon: ({color, size}) => (<UserCircle />), }}
            />
        </Navigator>     
    );
}