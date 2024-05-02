import { React, useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import QuestCard from './QuestsCard';
import questsData from '../Resources/test.json';
import { FIRESTORE_DB } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 6,
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
  },
});


const QuestsView = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused(); // Hook to check if screen is focused

  const addQuestPress = () => {
    navigation.navigate('Profile');
  }

  const handleDeleteQuest = async (deletedQuestId) => {
    try {
      // Remove the deleted quest from the quests state
      setData(prevQuests => prevQuests.filter(quest => quest.id !== deletedQuestId));

      // Alternatively, you could refetch the data to ensure consistency with the server
      // const querySnapshot = await getDocs(collection(FIRESTORE_DB, 'Quests'));
      // const fetchedQuests = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // setQuests(fetchedQuests);
    } catch (error) {
      console.error('Error deleting quest: ', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isFocused) { // Only fetch data if screen is focused
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
    <View style={loading ? styles.container : null}>
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
        />
      )}
    <Footer navigation={navigation}/>
    </View>
  );
}

export default QuestsView;

