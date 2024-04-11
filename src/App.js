import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnterView from './UI/EnterView';
import QuestsView from './UI/QuestsView';
import SingleQuestView from './UI/SingleQuestView';
import DatabaseScreen from './UI/DataBase';

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
          options={{ title: 'Quests Screen' }}
        />

        <Stack.Screen
          name="SingleQuest"
          component={SingleQuestView}
          options={{ title: 'Quests Screen' }} // Unique title for Quests screen
        />

        <Stack.Screen
          name="DataBase"
          component={DatabaseScreen}
          options={{ title: 'DataBase Screen' }} // Unique title for Quests screen
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
