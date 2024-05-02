import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import QuestCard from './QuestsCard';
import { FIRESTORE_DB } from '../FirebaseConfig';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%', // Adjust the position of the activity indicator
  },
  listContainer: {
    flex: 1, // Ensure the list takes remaining space
    width: '100%', // Ensure the list takes full width
  },
});

const QuestsView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused(); // Hook to check if screen is focused
  const navigation = useNavigation();

  const addQuestPress = () => {
    navigation.navigate('Profile');
  }

  const handleDeleteQuest = async (deletedQuestId) => {
    try {
      // Remove the deleted quest from the quests state
      setData(prevQuests => prevQuests.filter(quest => quest.id !== deletedQuestId));
    } catch (error) {
      console.error('Error deleting quest: ', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isFocused) { // Only fetch data if screen is focused
          // const querySnapshot = await getDocs(collection(FIRESTORE_DB, 'Quests').orderBy("date"));
          const querySnapshot = await getDocs(collection(FIRESTORE_DB, 'Quests'));
          const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setData(fetchedData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData(); // Fetch data on component mount and when the screen is focused
  }, [isFocused]);

  // Set navigation options
  // Set navigation options
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              type="material-community"
              name="logout"
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
        );
      },
      headerRight: () => (
        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
          <TouchableOpacity onPress={addQuestPress}>
            <Icon
              type="material-community"
              name="human-male"
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
      )
    });
  }, [navigation]);

  const renderItem = ({ item }) => <QuestCard quest={item} onDelete={handleDeleteQuest} />;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color={'#1893F8'}
          style={styles.activityIndicator}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.listContainer} // Apply styles to the FlatList
        />
      )}
      <Footer navigation={navigation} />
    </View>
  );
}

export default QuestsView;
