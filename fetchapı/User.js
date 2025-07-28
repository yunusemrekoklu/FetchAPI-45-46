import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const User = ({ data }) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate("profile", { userID: data.id })}
    >
      <View
        style={{
          width: "90%",
          height: 70,
          padding: 5,
          flexDirection: "row",
          margin: 3,
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "black",
            }}
            source={{ uri: data.image }}
          />
        </View>
        <View style={{ flex: 5, justifyContent: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {data.firstName} {data.lastName}
          </Text>
          <Text style={{ fontSize: 12, color: "EAEAEA" }}>{data.email}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#9D7CD6",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 9,
              marginLeft: 25,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {data.age}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
