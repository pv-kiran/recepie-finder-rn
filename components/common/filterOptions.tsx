import Chip from "@/components/common/chip";
import { FilterOption } from "@/constants/filterOptions";
import { Text, View } from "react-native";

const FilterOptions = ({
  options,
  title,
}: {
  options: FilterOption[];
  title: string;
}) => {
  return (
    <View className="gap-3">
      <Text className="text-lg font-light px-1">{title}</Text>
      <View className="flex-row flex-wrap gap-4">
        {options.slice(0, 6).map((item) => {
          return <Chip variant="sm" key={item.key} label={item.label} />;
        })}
      </View>
    </View>
  );
};

export default FilterOptions;
