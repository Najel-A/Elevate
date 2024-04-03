import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnterView from './UI/EnterView';
import QuestsView from './UI/QuestsView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Enter"
          component={EnterView}
          options={{ title: 'Enter Screen' }}
        />

        <Stack.Screen
          name="Quests"
          component={QuestsView}
          options={{ title: 'Quests Screen' }} // Unique title for Quests screen
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
