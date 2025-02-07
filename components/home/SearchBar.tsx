import { View,TouchableOpacity, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";



export const SearchBar = () => (
    <View className="px-4 py-3 bg-white shadow-sm">
        <View className="bg-gray-100 flex-row items-center rounded-full px-4 py-3">
        <Feather name="search" size={24} color="#4B5563" />
        <TextInput placeholder="Rechercher un produit" className="ml-3 flex-1" />
        <TouchableOpacity>
            <Feather name="filter" size={24} color="#4B5563" />
        </TouchableOpacity>
    </View>
    </View>
);