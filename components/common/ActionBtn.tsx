import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const ActionBtn = ({
  icon,
  action,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  action: () => void;
}) => {
  return (
    <Pressable
      className="bg-[#FFF] p-1 rounded-md shadow-2xl"
      onPress={() => action()}>
      <Ionicons name={icon} size={20} />
    </Pressable>
  );
};

export default ActionBtn;
