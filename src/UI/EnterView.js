import React from 'react';
import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, KeyboardAvoidingView, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Ensure the container has a positioning context
  },
  activityIndicator: {
    position: 'relative',
    alignSelf: 'center',
  },
});

const Enter = () => {
  const navigation = useNavigation();
  const [emailInputText, setEmailText] = useState('');
  const [passwordInputText, setPasswordText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleEmailChange = email => {
    setEmailText(email);
  };

  const handlePasswordChange = password => {
    setPasswordText(password);
  };


  // using this for testing
  const wait = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  const login = async () => {
    setIsLoading(true);
    await wait(2000);
    try {
      const response = await signInWithEmailAndPassword(auth, emailInputText, passwordInputText);
      console.log(response);
      navigation.navigate('Quests');  // Navigate to the "Quests" screen
      // Uncomment this when testing
      //setEmailText('');
      //setPasswordText('');
    } catch (error) {
      console.log(error);
      alert('Login Failed: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const signUp = async () => {
    setIsLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, emailInputText, passwordInputText);
      console.log(response);
      alert('Check your Email');
      console.log(response.user);
      setEmailText('');
      setPasswordText('');
      navigation.navigate('Quests');  // Navigate to the "Quests" screen
    } catch (error) {
      console.log(error);
      alert('Sign Up Failed: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const onPressEnter = () => {
    if (passwordInputText == "1234") {
      navigation.navigate('DataBase');  // Navigate to the "Quests" screen
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
          onPress={login} // Call onPressEnter function when button is pressed
        >
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity // Using TouchableOpacity instead of Button to customize styles easily
          style={{height: 30, width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', marginTop: 10, borderRadius: 5}}
          onPress={signUp} // Call onPressEnter function when button is pressed
        >
          <Text style={{color: 'white'}}>Register</Text>
        </TouchableOpacity>

        {isLoading && <ActivityIndicator
          size={'large'}
          color={'#1893F8'}
          style={styles.activityIndicator}
         />}


      </View>
    </View>

  );
};

export default Enter;
