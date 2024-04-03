import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Enter = () => {
  const navigation = useNavigation();

  const onPressEnter = () => {
    // Navigate to the "Quests" screen
    navigation.navigate('Quests');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={{padding: 5, opacity: .50}}>Are you ready to become better?</Text>
        <Button
          title='Enter'
          onPress={onPressEnter} // Call onPressEnter function when button is pressed
        />
      </View>
    </View>
  );
};

export default Enter;
