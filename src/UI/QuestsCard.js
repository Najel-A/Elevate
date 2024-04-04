import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SingleQuestView from './SingleQuestView';

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

const QuestCard = ({ quest }) => {
  const swipeableRef = React.useRef(null);
  const navigation = useNavigation();

  const onPressQuest = () => {
    navigation.navigate('SingleQuest', { quest });
  };

  const rightSwipeActions = () => {
    return (
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 25,
          marginBottom: 10,
          marginTop: 10
        }}>
        {/* Swipe actions to delete, do later */}
      </View>
    );
  };

  return (
    <Swipeable ref={swipeableRef} renderRightActions={rightSwipeActions}>
      <TouchableOpacity style={styles.container} onPress={onPressQuest}>
        <Text style={styles.name}>{quest.Title}</Text>
        <Text style={styles.content} numberOfLines={2} ellipsizeMode="tail">{quest.Content}</Text>
        <Text style={styles.posted}>{quest.Posted}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default QuestCard;
