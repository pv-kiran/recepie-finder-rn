import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";
const SafeArea = styled(RNSafeArea);
export default function Index() {
  return (
    <SafeArea className="flex-1">
      <View>
        <Text>Recepie Finder</Text>
      </View>
    </SafeArea>
  );
}
