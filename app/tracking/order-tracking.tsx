import { View, Text, ScrollView } from 'react-native';

import {order, steps} from "@/data"

export default function OrderTracking() {


return (
    <ScrollView className="flex-1 bg-white p-6">
        <View className="bg-blue-50 p-6 rounded-xl mb-8">
        <Text className="text-lg font-semibold mb-2">
            Commande #{order.trackingNumber}
        </Text>
        <Text className="text-gray-600">
            Expédiée le {new Date(order.date).toLocaleDateString()}
        </Text>
    </View>

        <View className="space-y-6">
        {steps.map((step, index) => (
            <View key={step.title} className="flex-row items-center">
            <View className="relative">
                <View
                className={`w-8 h-8 rounded-full ${
                    step.done ? 'bg-blue-500' : 'bg-gray-200'
                } items-center justify-center`}
            >
                {step.done && (
                    <Text className="text-white">✓</Text>
                )}
                </View>
                {index < steps.length - 1 && (
                <View
                    className={`absolute h-14 w-0.5 top-8 left-4 ${
                    step.done ? 'bg-blue-500' : 'bg-gray-200'
                }`}
                />
            )}
            </View>
            <View className="ml-4">
                <Text className="font-semibold">{step.title}</Text>
                    {step.done && (
                <Text className="text-gray-500 text-sm">Terminé</Text>
            )}
            </View>
            </View>
        ))}
    </View>
    </ScrollView>
);
}