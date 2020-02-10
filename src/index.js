import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import Store from '../src/Store';


import MainTabs from './Navigators/MainStack';

const AppContainer = createAppContainer(MainTabs);

export default () => (
  <Provider store={Store}>
    <AppContainer />
  </Provider>
)