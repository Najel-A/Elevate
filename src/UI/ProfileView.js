import React, { useState, useEffect } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  box: {
    marginTop: 50,
    width: 300,
    height: 250,
    backgroundColor: "#673ab7",
  },
});

const ProfileView = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: isDarkMode ? "#333" : "#fff",
      },
      headerTitleStyle: {
        color: isDarkMode ? "#fff" : "#000",
      },
    });
  }, [isDarkMode, navigation]);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#333" : "#fff" }]}>
      {!isDarkMode ? <Text style={{ color: "#000" }}>Dark Mode</Text> : <Text style={{ color: "#FFF" }}>Light Mode</Text>}
      <Switch
        trackColor={{ false: "#767577", true: "#4caf50" }}
        thumbColor={isDarkMode ? "#8bc34a" : "#ddd"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDarkMode}
        value={isDarkMode}
      />

      {isDarkMode && <View style={[styles.box, { backgroundColor: "#8bc34a" }]}></View>}
    </View>
  );
};

export default ProfileView;
