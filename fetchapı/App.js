import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { User } from "./User";
import { UserList } from "./UserList";
import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Navigator />

        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
