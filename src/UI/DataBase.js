import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FIRESTORE_DB } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const DatabaseScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <View>
      <Text>Data from Firestore:</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {data.map(item => (
            <View key={item.id}>
              <Text>{item.title ? item.title : 'N/A'}</Text>
              <Text>{item.reward ? item.reward : 'N/A'}</Text>
              <Text>{item.date ? item.date : 'N/A'}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
  
};

export default DatabaseScreen;

