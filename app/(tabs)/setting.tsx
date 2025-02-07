import { View, Text, TouchableOpacity, Switch, Image } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

// Import des données externalisées
import { userProfile, menuItems } from "@/data";

export default function Setting() {
  const [notifications, setNotifications] = useState(true);

  return (
    <View className="flex-1 mt-8 bg-white">
      {/* En-tête Profil */}
      <View className="p-6 border-b border-gray-100">
        <View className="flex-row items-center">
          <Image 
            source={{ uri: userProfile.avatar }} 
            className="w-16 h-16 rounded-full mr-4"
          />
          <View>
            <Text className="text-xl font-semibold">{userProfile.name}</Text>
            <Text className="text-gray-500">{userProfile.email}</Text>
          </View>
        </View>
      </View>

      {/* Paramètres */}
      <View className="p-6">
        {/* Option Notifications */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <Icon name="bell" size={24} color="#4B5563" />
            <Text className="ml-4 font-semibold">Notifications</Text>
          </View>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>

        {/* Liste des paramètres */}
        {menuItems.map((item) => (
          <TouchableOpacity key={item.title} className="flex-row items-center py-4">
            <Icon name={item.iconName} size={24} color="#4B5563" />
            <View className="ml-4 flex-1">
              <Text className="font-semibold">{item.title}</Text>
              <Text className="text-gray-500 text-sm">{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Déconnexion */}
        <TouchableOpacity className="flex-row items-center py-4 mt-4">
          <Icon name="log-out" size={24} color="#EF4444" />
          <Text className="ml-4 text-red-500 font-semibold">Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
