import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Promotions } from "@/components/home/Promotions";
import { TopBar } from "@/components/home/TopBar";
import { View } from "react-native";
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler";
import { SearchBar } from "@/components/home/SearchBar";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  
  const handleLogout = () => router.replace("/auth/login");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="mt-8 flex-1 bg-gradient-to-br from-blue-50 to-blue-100">
      <TopBar onLogout={handleLogout} />
      <SearchBar />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Promotions />
        <Categories />
        <FeaturedProducts />
      </ScrollView>
    </View>
    </GestureHandlerRootView>
  );
}