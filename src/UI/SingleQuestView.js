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
  const route = useRoute();
  const navigation = useNavigation();
  const { quest } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: quest.title });
  }, [navigation, quest.Title]);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>{quest.reward}</Text>
      <Text>{quest.date}</Text>
    </View>
  );
};

export default SingleQuestView;
