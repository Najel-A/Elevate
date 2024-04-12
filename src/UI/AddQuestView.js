import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    messageContainer: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ECECEC',
    },
    content: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
});

// consider making this a popup instead of a new screen?

const AddQuestView = ({ navigation }) => {
    const [addQuestText, setAddQuestText] = useState('');

    const handleQuestChange = Quest => {
        setAddQuestText(Quest);
    };

    const handleCancelPress = () => {
        navigation.goBack();
    };

    const handleAddPress = () => {

    }

    const handleAddQuest = async() =>{
        // Do firebase logic here
    }
    
    return (
        <View style={styles.container}>
            <TextInput
                style={{
                height: 40,
                width: 200,
                borderColor: 'gray',
                borderWidth: 1,
                marginTop: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
                }}
                placeholder="New Quest"
                value={addQuestText}
                onChangeText={handleQuestChange}
                accessibilityLabel="content"
            />
        
            <View
            style={{
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            }}>
                <View style={{marginRight: 10}}>
                <Button
                    title="Cancel"
                    onPress={handleCancelPress}
                    accessibilityLabel="cancel"
                />
                </View>
                
                <View style={{marginLeft: 10}}>
                <Button 
                    title="Add"  
                    // onPress={}
                    accessibilityLabel="add"
                />
                </View>
            </View>

        </View>
    );
}

export default AddQuestView;