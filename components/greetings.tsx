import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const Greetings = () => {
  return (
    <View className="flex-row justify-between items-center">
      <View className="gap-2">
        <View className=" flex-row gap-3 items-center">
          <Ionicons name="sunny-sharp" size={28} color="#6FAFB0" />
          <Text className="text-xl">Good morning</Text>
        </View>
        <Text className="text-4xl font-bold">Tony Kroos</Text>
      </View>
      <Ionicons name="cart-outline" size={28} color="black" />
    </View>
  );
};

export default Greetings;
