import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link} from "expo-router";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { userProfile } from "@/data";

export const TopBar = ({ onLogout } :any) => (
<View className="bg-white shadow-md px-4 py-3 flex-row items-center justify-between">
    <View className="flex-row items-center space-x-4">
        <TouchableOpacity>
        <Image source={{ uri: userProfile.avatar }} className="w-10 h-10 rounded-full" />
        </TouchableOpacity>
        <View>
        <Text className="text-lg font-bold text-gray-800">{userProfile.name}</Text>
        <Text className="text-xs text-gray-500">{userProfile.membership}</Text>
    </View>
    </View>
    <View className="flex-row items-center space-x-4">
        <Link href="/tracking/order-tracking" asChild>
        <TouchableOpacity className="relative">
            <Feather name="bell" size={24} color="#4B5563" />
            <View className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full items-center justify-center">
            <Text className="text-white text-xs">3</Text>
        </View>
        </TouchableOpacity>
    </Link>
        <TouchableOpacity onPress={onLogout}>
        <MaterialIcons name="logout" size={24} color="#4B5563" />
        </TouchableOpacity>
    </View>
</View>
);