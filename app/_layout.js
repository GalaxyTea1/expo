import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "../redux/store";;

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </Provider>
  );
};

export default Layout;
