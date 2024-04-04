import React from 'react';
import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const Enter = () => {
  const navigation = useNavigation();
  const [emailInputText, setEmailText] = useState('');
  const [passwordInputText, setPasswordText] = useState('');
  const [isLoggedOn, setIsLoggedOn] = useState(false);

  const handleEmailChange = email => {
    setEmailText(email);
  };

  const handlePasswordChange = password => {
    setPasswordText(password);
  };

  const onPressEnter = () => {
    if (passwordInputText == "1234") {
      navigation.navigate('Quests');  // Navigate to the "Quests" screen
      setEmailText('');
      setPasswordText('');
    }
  };

  return (
    
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{padding: 5, opacity: 0.5}}>Are you ready to become better?</Text>

        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 10}}
          placeholder="email"
          value={emailInputText}
          onChangeText={handleEmailChange}
          accessibilityLabel="email"
        />

        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop: 10}}
          placeholder="password"
          value={passwordInputText}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          accessibilityLabel="password"
        />

        <TouchableOpacity // Using TouchableOpacity instead of Button to customize styles easily
          style={{height: 30, width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', marginTop: 10, borderRadius: 5}}
          onPress={onPressEnter} // Call onPressEnter function when button is pressed
        >
          <Text style={{color: 'white'}}>Enter</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
};

export default Enter;
