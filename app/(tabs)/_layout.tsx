import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

/**
 * Composant pour les icônes de la barre de navigation
 */
function TabBarIcon(props: { 
    name: React.ComponentProps<typeof FontAwesome>["name"]; 
    focused: boolean;
}) {
    const colorScheme = useColorScheme();
    return (
        <FontAwesome 
            size={28} 
            style={{ marginBottom: -3 }} 
            color={props.focused ? Colors[colorScheme ?? "light"].tint : Colors[colorScheme ?? "light"].tabIconDefault} 
            {...props} 
        />
    );
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme ?? "light"].background, // Adapter la couleur de fond
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabBarIcon name="home" focused={focused} />,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? "light"].text}
                                        style={{ 
                                            marginRight: 15, 
                                            opacity: pressed ? 0.5 : 1 
                                        }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="setting"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabBarIcon name="cog" focused={focused} />,
                }}
            />
        </Tabs>
    );
}
