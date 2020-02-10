import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Icon from 'react-native-vector-icons/MaterialIcons'

import Main from '../screens/Main';
import Second from '../screens/Second';
import Account from '../screens/Account';
import Activity from '../screens/Activity';
import Groups from '../screens/Groups';


const MainStack = createBottomTabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      // tabBarIcon: <Icon name="search" size={25} />,
      title:"Amigos",
    }
  },
  Favorites: {
    screen: Second,
    navigationOptions: {
      // tabBarIcon: <Icon name="star" size={25} />,
      title:"Grupos",
    }
  },
  Groups: {
    screen: Groups,
    navigationOptions: {
      // tabBarIcon: <Icon name="star" size={25} />,
      title:"MAIS",
    }
  },
  Activity: {
    screen: Activity,
    navigationOptions: {
      // tabBarIcon: <Icon name="star" size={25} />,
      title:"Atividade",
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      // tabBarIcon: <Icon name="star" size={25} />,
      title:"Conta",
    }
  },
  
});

export default MainStack;