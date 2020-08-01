/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeProvider } from 'styled-components/native'

import theme from '@theme'
import store from '@store'
import { Text } from '@ui'

import Home from './home'
import Items from './items'

const Stack = createStackNavigator();

const App: React.SFC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center'
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: '',
              headerStyle: {
                height: 0
              }
            }}
          />
          <Stack.Screen
            name="Items"
            component={Items}
            options={{ title: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer> 
    </Provider>
  );
};


export default () => <ThemeProvider theme={theme}><App /></ThemeProvider>;
