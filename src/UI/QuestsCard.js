import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      padding: 10,
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
    },
    posted: {
      fontSize: 12,
      color: '#888888',
      position: 'absolute',
      bottom: 0,
      right: 5,
    },
});

const QuestCard = () => {
    const swipeableRef = React.useRef(null);
    const rightSwipeActions = () => {
        return (
          <View
            style={{
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              marginBottom: 10,
            }}>
            
          </View>
        );
      };
    return (
        <Swipeable ref={swipeableRef} renderRightActions={rightSwipeActions}>
        <Text>Hello</Text>
        </Swipeable>
    );
}

export default QuestCard;