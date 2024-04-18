import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useNavigation } from '@react-navigation/native';
import { deleteDoc, doc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../FirebaseConfig';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  posted: {
    fontSize: 12,
    color: '#888888',
    position: 'absolute',
    bottom: 0,
    right: 5,
  },
});

const QuestCard = ({ quest, onDelete }) => {
  const [loading, setLoading] = useState(true);
  const swipeableRef = React.useRef(null);
  const navigation = useNavigation();

  const onPressQuest = () => {
    navigation.navigate('SingleQuest', { quest });
  };

  const handleDelete = async () => {
    try {
      // Call Firestore delete function to delete the quest document
      console.log('Quest Deleted:', quest.id);
      await deleteDoc(doc(FIRESTORE_DB, 'Quests', quest.id));
      onDelete(quest.id);
    } catch (error) {
      console.error('Error deleting quest:', error);
    }
  };

  const rightSwipeActions = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 25,
          marginBottom: 10,
          marginTop: 10
        }}
        onPress={handleDelete}>
        <Text style={{ color: 'white' }}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable ref={swipeableRef} renderRightActions={rightSwipeActions}>
      <TouchableOpacity style={styles.container} onPress={onPressQuest}>
        <Text style={styles.name}>{quest.title}</Text>
        <Text style={styles.content} numberOfLines={1} ellipsizeMode="tail">{quest.reward}</Text>
        <Text style={styles.posted}>{quest.date}</Text>
        <Text>{quest.id}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default QuestCard;
