import { styled } from "nativewind";
import React from "react";
import { SafeAreaView as RNSafeArea } from "react-native-safe-area-context";
const SafeArea = styled(RNSafeArea);
const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeArea className="flex-1" edges={["top"]}>
      {children}
    </SafeArea>
  );
};

export default ScreenWrapper;
