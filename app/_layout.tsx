import { Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { authService } from "services/authService";
import { store } from "../redux/store";

export default function RootLayout() {
  useEffect(() => {
    authService.initialize();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}
