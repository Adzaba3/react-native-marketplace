import { View, Text, TouchableOpacity } from "react-native";
import { categories,} from "@/data";


export const Categories = () => (
    <View className="px-4 mb-6">
        <View className="flex-row justify-between">
        {categories.map((category) => (
            <TouchableOpacity key={category.name} className="items-center bg-white shadow-md p-4 rounded-xl w-16 h-16 justify-center">
            <Text className="text-2xl">{category.icon}</Text>
            <Text className="text-xs mt-1">{category.name}</Text>
        </TouchableOpacity>
        ))}
    </View>
    </View>
);