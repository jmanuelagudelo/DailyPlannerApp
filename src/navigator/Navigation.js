import  {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faList,faUser,faBookBookmark,faCalendar,faHeartCircleBolt} from '@fortawesome/free-solid-svg-icons'


import AccountScreen from "../screens/AccountScreen";
import CalendarScreen from "../screens/CalendarScreen";
import StatsScreen from "../screens/StatsScreen";
import ToDoListScreen from "../screens/ToDoListScreen";
import MainScreen from "../screens/MainScreen";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold',
                },
                    headerStyle: {
                    height: Platform.OS === 'ios' ? 120 : 60,
                },
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 90 : 60,
                    position: 'absolute',
                    backgroundColor: '#1c1c1c',
                    paddingBottom: 10,
                    borderRadius: 20,
                },
            }}
            >
                <Tab.Screen 
                name="ToDoList"
                component={ToDoListScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                    <FontAwesomeIcon icon={faList} 
                    size={30} 
                    color={focused ? '#588c7e' : '#ffe7cb'}
                    />
                    ),
                }}
                />

            <Tab.Screen 
                name="Calendar" 
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                    <FontAwesomeIcon icon={faCalendar} 
                    size={30} 
                    color={focused ? '#588c7e' : '#ffe7cb'}
                    />
                    ),
                }}
                />
                
                <Tab.Screen 
                name="Main" 
                component={MainScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                    <FontAwesomeIcon icon={faHeartCircleBolt}
                    size={30} 
                    color={focused ? '#588c7e' : '#ffe7cb'}
                    />
                    ),
                }}
                />

                <Tab.Screen 
                name="Stats" 
                component={StatsScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                    <FontAwesomeIcon icon={faBookBookmark} 
                    size={30} 
                    color={focused ? '#588c7e' : '#ffe7cb'}
                    />
                    ),
                }}
                />

                <Tab.Screen 
                name="Account" 
                component={AccountScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                    <FontAwesomeIcon icon={faUser} 
                    size={30} 
                    color={focused ? '#588c7e' : '#ffe7cb'}
                    />
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;