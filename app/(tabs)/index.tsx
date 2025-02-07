import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  TextInput 
} from "react-native";
import { Link, useRouter } from "expo-router";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Import des données externalisées
import { categories, featuredProducts, promotions, userProfile } from "@/data";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/auth/login");
  };

  return (
    <View className="mt-8 flex-1 bg-gradient-to-br from-blue-50 to-blue-100">
      {/* TopBar */}
      <View className="bg-white shadow-md px-4 py-3 flex-row items-center justify-between">
        <View className="flex-row items-center space-x-4">
          {/* Avatar */}
          <TouchableOpacity>
            <Image 
              source={{ uri: userProfile.avatar }} 
              className="w-10 h-10 rounded-full"
            />
          </TouchableOpacity>

          {/* Titre et Sous-titre */}
          <View>
            <Text className="text-lg font-bold text-gray-800">{userProfile.name}</Text>
            <Text className="text-xs text-gray-500">{userProfile.membership}</Text>
          </View>
        </View>

        {/* Actions */}
        <View className="flex-row items-center space-x-4">
          {/* Notifications */}
          <Link href="/tracking/order-tracking" asChild>
            <TouchableOpacity className="relative">
              <Feather name="bell" size={24} color="#4B5563" />
              <View className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full items-center justify-center">
                <Text className="text-white text-xs">3</Text>
              </View>
            </TouchableOpacity>
          </Link>
          {/* Déconnexion */}
          <TouchableOpacity onPress={handleLogout}>
            <MaterialIcons name="logout" size={24} color="#4B5563" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Barre de Recherche */}
      <View className="px-4 py-3 bg-white shadow-sm">
        <View className="bg-gray-100 flex-row items-center rounded-full px-4 py-3">
          <Feather name="search" size={24} color="#4B5563" />            
          <TextInput 
            placeholder="Rechercher un produit" 
            className="ml-3 flex-1"
          />
          <TouchableOpacity>
            <Feather name="filter" size={24} color="#4B5563" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenu principal */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Promotions */}
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

        {/* Categories */}
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

        {/* Featured Products */}
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
      </ScrollView>
    </View>
  );
}
