import { Text, View } from "react-native";
import { UserList } from "../UserList";

export const Home = () => {
  return (
    <View style={{ backgroundColor: "white", alignItems: "center", flex: 1 }}>
      <UserList />
    </View>
  );
};
