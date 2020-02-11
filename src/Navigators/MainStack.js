import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Add from 'react-native-vector-icons/Octicons';
import Act from 'react-native-vector-icons/Feather';

import Main from '../screens/Main';
import Second from '../screens/Second';
import Account from '../screens/Account';
import Activity from '../screens/Activity';
import Groups from '../screens/Groups';


const MainStack = createBottomTabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarIcon: <Icon name="person" size={25} />,
      title:"Amigos",
    }
  },
  Favorites: {
    screen: Second,
    navigationOptions: {
      tabBarIcon: <Icon name="group" size={25} />,
      title:"Grupos",
    }
  },
  Groups: {
    screen: Groups,
    navigationOptions: {
      tabBarIcon: <Add name="plus" size={25} />,
      title:"MAIS",
    }
  },
  Activity: {
    screen: Activity,
    navigationOptions: {
      tabBarIcon: <Act name="activity" size={25} />,
      title:"Atividade",
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarIcon: <Icon name="insert-photo" size={25} />,
      title:"Conta",
    }
  },
  
});

export default MainStack;