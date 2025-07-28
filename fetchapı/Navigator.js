import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "./screens/Profile";
import { Home } from "./screens/Home";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Anasayfa",
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ title: "Profil" }}
      />
    </Stack.Navigator>
  );
};
