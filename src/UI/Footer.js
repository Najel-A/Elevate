import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Footer = ({ navigation }) => {
  const addQuestPress = () => {
    navigation.navigate('AddQuest');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addQuestPress}>
        <Icon
          type="material-community"
          name="plus-box-outline"
          style={{ paddingLeft: 10 }}
          size={35}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // You can remove this line
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Footer;
