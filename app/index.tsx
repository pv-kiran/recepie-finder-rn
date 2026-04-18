import { images } from "@/assets/images";
import { useRouter } from "expo-router";
import { styled } from "nativewind";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";

const SafeArea = styled(RNSafeArea);
export default function Index() {
  const router = useRouter();
  return (
    <SafeArea className="flex-1">
      <ImageBackground
        className="flex-1 w-full h-full"
        source={images.home}
        resizeMode="cover">
        <View className="gap-2 h-full justify-end pb-20">
          <Text className="text-[24px] text-center p-4 text-amber-50 font-bold line leading-6">
            Help your path to health goals with happiness
          </Text>
          <TouchableOpacity
            className="bg-primary w-[80%] p-3 rounded-2xl mx-auto"
            onPress={() => router.replace("/(tabs)/recipes")}>
            <Text className="text-white text-center text-xl font-medium">
              Lets Go
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeArea>
  );
}
