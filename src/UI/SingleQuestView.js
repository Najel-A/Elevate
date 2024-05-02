import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FIRESTORE_DB } from '../FirebaseConfig';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

const SingleQuestView = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { quest } = route.params;

  const documentRef = doc(FIRESTORE_DB, 'Quests', quest.id);
  console.log(documentRef);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: quest.title });
  }, [navigation, quest.Title]);


  const handleUpdateChange = async () => {
    try {
      await updateDoc(documentRef, {
        date: 'Fake Date',
        reward: 'Congrats you updated me',
        title: 'Good job'
      });
      navigation.goBack();
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={{height: 30, width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', marginTop: 10, borderRadius: 5}}
      onPress={handleUpdateChange}
      >  
        <Text style={{color: 'white'}}>Update</Text>
      </TouchableOpacity>
      <Text style={styles.content}>{quest.reward}</Text>
      <Text>{quest.date}</Text>
      <Footer/>
    </View>
    
  );
};

export default SingleQuestView;
