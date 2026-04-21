import { Pressable, Text, View } from "react-native";

interface Tab {
  key: string;
  label: string;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
}

const TabSwitcher = ({ tabs, activeTab, onTabChange }: TabSwitcherProps) => {
  return (
    <View className="flex-row bg-gray-100 rounded-xl p-1 my-2">
      {tabs.map((tab) => (
        <Pressable
          key={tab.key}
          onPress={() => onTabChange(tab.key)}
          className={`flex-1 py-3 rounded-xl items-center ${
            activeTab === tab.key ? "bg-[#1a2e2e]" : ""
          }`}>
          <Text
            className={`font-bold text-sm ${
              activeTab === tab.key ? "text-white" : "text-[#1a2e2e]"
            }`}>
            {tab.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default TabSwitcher;
