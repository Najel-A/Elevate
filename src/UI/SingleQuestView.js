import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
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
  const route = useRoute(); // Get the route object
  const navigation = useNavigation(); // Get the navigation object
  const { quest } = route.params; // Access the quest object from params

  // Function to dynamically set the screen title
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: quest.Title }); // Set the screen title to the quest's title
  }, [navigation, quest.Title]);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>{quest.Content}</Text>
      {/* <Text>{quest.Posted}</Text> */}
    </View>
  );
};

export default SingleQuestView;

