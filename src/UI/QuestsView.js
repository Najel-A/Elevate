import { React, useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import QuestCard from './QuestsCard';
import questsData from '../Resources/test.json';
import { FIRESTORE_DB } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

// Rendering from the test.json file
// const QuestsView = () => {

//   const renderItem = ({ item }) => <QuestCard quest={item} />;

//   return (
//     <FlatList
//       data={questsData}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.ID}
//     />
//   );
// };

// export default QuestsView;

const QuestsView = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const addQuestPress = () => {
    navigation.navigate('AddQuest');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(FIRESTORE_DB, 'Quests'));
        const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };
  
    fetchData();
  
    // Use free icon later on?
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
          <TouchableOpacity onPress={addQuestPress}>
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
      )
    });

  }, []);
  

  const renderItem = ({ item }) => <QuestCard quest={item} />;

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}

export default QuestsView;

