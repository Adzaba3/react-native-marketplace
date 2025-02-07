import { View, Text, ScrollView, Image} from "react-native";
import {  promotions } from "@/data";  

export const Promotions = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 mt-4 mb-6">
        {promotions.map((promo, index) => (
        <View key={index} className="mr-4 rounded-2xl overflow-hidden shadow-lg">
            <Image source={{ uri: promo.image }} className="w-80 h-48" />
            <View className="absolute bottom-0 left-0 right-0 p-4 bg-black/40">
            <Text className="text-white text-xl font-bold">{promo.title}</Text>
            <Text className="text-white">{promo.subtitle}</Text>
        </View>
        </View>
    ))}
    </ScrollView>
);