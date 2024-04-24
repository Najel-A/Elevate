import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { FIRESTORE_DB } from '../FirebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

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

    const generateTimeStamp = () => {
        const currentDate = new Date();
    
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear() % 100;
    
        // Convert hours to 12-hour format
        let hours = currentDate.getHours();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;
    
        const minutes = currentDate.getMinutes();
    
        const formattedDate = `${month}/${day}/${year} ${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    
        return formattedDate;
    };
    

    const handleQuestChange = Quest => {
        setAddQuestText(Quest);
    };

    const handleCancelPress = () => {
        navigation.goBack();
    };

    const handleAddPress = () => {
        handleAddQuest();
        navigation.goBack();
    }

    const handleAddQuest = async () => {
        const timeStamp = generateTimeStamp();
        try {
            // Do firebase logic here
            await addDoc(collection(FIRESTORE_DB, "Quests"), {
                title: addQuestText,
                reward: "Need to fix this later",
                date: timeStamp,
            });
            console.log("Quest added successfully!");
        } catch (error) {
            console.error("Error adding quest:", error);
        }
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
                    onPress={handleAddPress}
                    accessibilityLabel="add"
                />
                </View>
            </View>

        </View>
    );
}

export default AddQuestView;