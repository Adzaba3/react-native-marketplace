import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import Feather from 'react-native-vector-icons/Feather';

import { welcomeSteps } from '@/data';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {


    const [currentStep, setCurrentStep] = React.useState(0);

    const nextStep = () => {
        if (currentStep < welcomeSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <View className="flex-1 bg-white justify-center items-center">
            <View className="w-full px-8 items-center">
                <Image
                    source={{ uri: welcomeSteps[currentStep].image }}
                    className="w-64 h-64 rounded-full mb-8"
                />

                <Text className="text-2xl font-bold text-center mb-4">
                    {welcomeSteps[currentStep].title}
                </Text>
                <Text className="text-gray-600 text-center mb-8">
                    {welcomeSteps[currentStep].subtitle}
                </Text>

                {/* Indicateurs de progression */}
                <View className="flex-row space-x-2 mb-8">
                    {welcomeSteps.map((_, index) => (
                        <View 
                            key={index} 
                            className={`h-2 w-2 rounded-full ${index === currentStep ? 'bg-blue-500' : 'bg-gray-300'}`} 
                        />
                    ))}
                </View>

                {/* Bouton Suivant ou Commencer */}
                {currentStep === welcomeSteps.length - 1 ? (
                    <Link href="/auth/login" asChild>
                        <TouchableOpacity className="bg-blue-500 px-8 py-4 rounded-full flex-row items-center">
                            <Text className="text-white font-semibold mr-2">Commencer</Text>
                            <Text> 
                                <Feather name="chevron-right" size={24} color="white" />
                            </Text>
                        </TouchableOpacity>
                    </Link>
                ) : (
                    <TouchableOpacity onPress={nextStep} className="bg-blue-500 px-8 py-4 rounded-full flex-row items-center">
                        <Text className="text-white font-semibold mr-2">Suivant</Text>
                        <Text> 
                            <Feather name="chevron-right" size={24} color="white" />
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
