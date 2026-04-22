import "@/global.css";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
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
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider className="flex-1">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
