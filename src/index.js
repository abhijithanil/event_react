import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Root, Toast } from "native-base";
import routes from './routes.js'
import { Provider } from "react-redux";
import Store from "./store.js";
export const MainApp = StackNavigator(routes, {
  initialRouteName: 'login'
});
export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Root>
          <MainApp />
        </Root>
      </Provider>
    )
  }
}
