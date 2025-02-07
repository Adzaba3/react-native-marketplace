import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Link} from "expo-router";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { featuredProducts} from "@/data";


export const FeaturedProducts = () => (
    <View className="px-4 mb-5">
        <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold">Produits Populaires</Text>
        <Link href="/(tabs)" asChild>
            <TouchableOpacity>
            <Text className="text-blue-500">Voir tout</Text>
        </TouchableOpacity>
        </Link>
    </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row space-x-4">
            {featuredProducts.map((product) => (
            <TouchableOpacity key={product.id} className="bg-white rounded-2xl p-4 w-48 shadow-md">
                <Image source={{ uri: product.image }} className="w-full h-32 rounded-lg mb-2" />
                <Text className="font-semibold">{product.name}</Text>
                <View className="flex-row justify-between items-center mt-2">
                <Text className="font-bold text-blue-500">{product.price} XAF</Text>
                <View className="flex-row items-center">
                    <FontAwesome name="star" size={16} color="#FFD700" />
                    <Text className="ml-1 text-sm">{product.rating}</Text>
                </View>
            </View>
            </TouchableOpacity>
        ))}
        </View>
    </ScrollView>
    </View>
);