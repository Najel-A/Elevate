import React from 'react';
import { View, FlatList } from 'react-native';
import QuestCard from './QuestsCard';
import questsData from '../Resources/test.json';

const QuestsView = () => {

  const renderItem = ({ item }) => <QuestCard quest={item} />;

  return (
    <FlatList
      data={questsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.ID}
    />
  );
};

export default QuestsView;
