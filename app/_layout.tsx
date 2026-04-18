import "@/global.css";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  useEffect(() => {
    async function prepare() {
      // simulate loading (fonts/api/auth)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);
  return (
    <SafeAreaProvider className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
