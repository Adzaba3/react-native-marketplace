import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from "expo-router"

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSocialLogin = (provider:any) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <View className="flex-1 bg-white p-6">
      {/* Logo Section */}
      <View className="h-32 flex items-center justify-center">
        <Text className="text-3xl font-bold text-blue-500">GoulBamShop</Text>
      </View>

      {/* Login Form */}
      <View className="space-y-4">
        <View>
          <Text className="text-gray-700 mb-2">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3"
            placeholder="john@example.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-2">Mot de passe</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity className="items-end">
          <Text className="text-blue-500">Mot de passe oublié ?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <Link href="/(tabs)" asChild>
        <TouchableOpacity className="bg-blue-500 rounded-lg py-4">
          <Text className="text-white text-center font-semibold">
            Se connecter
          </Text>
        </TouchableOpacity>
        </Link>

        {/* Social Login Divider */}
        <View className="flex-row items-center my-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">ou continuer avec</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Login Buttons */}
        <View className="flex-row space-x-4">
          <TouchableOpacity 
            onPress={() => handleSocialLogin('google')}
            className="flex-1 flex-row items-center justify-center space-x-2 border border-gray-300 rounded-lg py-3"
          >
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkRFuG-FebXK8BQPEo80Ai_KGWyMPm6UT6w&s' }}  
              className="w-10 h-10"
            />
            <Text className="text-gray-700 font-medium">Google</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => handleSocialLogin('facebook')}
            className="flex-1 flex-row items-center justify-center space-x-2 border border-gray-300 rounded-lg py-3"
          >
            <Image 
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png' }}
              className="w-10 h-10 rounded-full"
            />
            <Text className="text-gray-700 font-medium">Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">Pas encore de compte ? </Text>
          <TouchableOpacity>
            <Text className="text-blue-500 font-semibold">S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}