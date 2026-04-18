import { TABS } from "@/constants/tab";
import "@/global.css";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabsLayout() {
  return (
    <SafeAreaProvider className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#6FAFB0",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 100,
            paddingTop: 5,
          },
        }}>
        {TABS.map((tab) => {
          return (
            <Tabs.Screen
              name={tab.name}
              options={{
                title: tab.title,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons
                    key={tab.name}
                    name={tab.icon}
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
          );
        })}
      </Tabs>
    </SafeAreaProvider>
  );
}
