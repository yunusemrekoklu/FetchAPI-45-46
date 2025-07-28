import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { User } from "./User";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      fetch("https://dummyjson.com/users")
        .then((resp) => resp.json())
        .then((json) => setUsers(json.users))
        .finally((e) => setLoading(false));
    })();
  }, []);
  return (
    <View style={{ width: "90%", height: "95%" }}>
      {loading ? (
        <ActivityIndicator size={"large"} color={"red"} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <User data={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
