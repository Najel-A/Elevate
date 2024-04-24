import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnterView from './UI/EnterView';
import QuestsView from './UI/QuestsView';
import SingleQuestView from './UI/SingleQuestView';
import DatabaseScreen from './UI/DataBase';
import AddQuestView from './UI/AddQuestView';
import ProfileView from './UI/ProfileView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Enter"
          component={EnterView}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Quests"
          component={QuestsView}
          options={{ 
            title: 'Elevate',
            headerTitleAlign: 'center' 
          }}
        />

        <Stack.Screen
          name="SingleQuest"
          component={SingleQuestView}
          options={{ title: 'Quests Screen' }}
        />

        <Stack.Screen
          name="DataBase"
          component={DatabaseScreen}
          options={{ title: 'DataBase Screen' }}
        />

        <Stack.Screen
          name="AddQuest"
          component={AddQuestView}
          options={{ title: 'Add Quest' }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileView}
          options={{ title: '$User' }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
