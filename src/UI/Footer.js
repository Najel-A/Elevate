import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


// Add buttons and here
const Footer = ({navigation}) => {
    const addQuestPress = () => {
        navigation.navigate('AddQuest');
      }
  return (
    <View style={styles.container}>

    {/* Add button here */}
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {

  }
});

export default Footer;
