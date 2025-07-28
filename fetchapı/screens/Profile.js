import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

export const Profile = () => {
  const route = useRoute();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (() => {
      const userID = route.params.userID;
      fetch("https://dummyjson.com/users/" + userID)
        .then((resp) => resp.json())
        .then((json) => setUser(json))
        .finally((e) => setLoading(false));
    })();
  }, []);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {loading ? <Loading /> : <UserInfo data={user} />}
    </View>
  );
};

const Loading = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ActivityIndicator size={"large"} color={"red"} />
    </View>
  );
};

const UserInfo = ({ data }) => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 200,
            height: 200,
            borderRadius: 85,
            marginTop: 30,
            borderWidth: 2,
            borderColor: "black",
            margin: 5,
          }}
          source={{ uri: data.image }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          {data.firstName} {data.lastName}
        </Text>
        <Text style={{ color: "EAEAEA", fontSize: 17 }}>{data.email}</Text>
        <Text style={{ color: "red", fontSize: 17, fontWeight: "bold" }}>
          {" "}
          {data.phone}{" "}
        </Text>
      </View>
    </View>
  );
};
