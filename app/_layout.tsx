import FontAwesome from "@expo/vector-icons/FontAwesome"
import { ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { useEffect } from "react"
import { SafeAreaView, useColorScheme } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { CustomLightTheme, CustomDarkTheme } from './theme';

export {
    ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
    initialRouteName: "(tabs)",
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
})

useEffect(() => {
    if (error) throw error
}, [error])

useEffect(() => {
    if (loaded) {
        SplashScreen.hideAsync()
    }
}, [loaded])

if (!loaded) {
    return null
}

return <RootLayoutNav />
}

function RootLayoutNav() {
    const colorScheme = useColorScheme()

return (
    <>
    <SafeAreaView></SafeAreaView>
    <StatusBar 
        style={colorScheme === 'dark' ? 'light' : 'dark'}
    />
    <ThemeProvider 
        value={colorScheme === "dark" ? CustomDarkTheme : CustomLightTheme}
    >
        <Stack>
            <Stack.Screen name="welcome" options={{ headerShown: false}} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
            name="auth/login"
            options={{
                headerShown: false,
                title: 'Connexion',
                presentation: 'modal',
                animation: 'slide_from_bottom'
            }}
        />
        <Stack.Screen
            name="tracking/order-tracking"
            options={{
                title: 'Order tracking',
            }}
        />
        </Stack>
    </ThemeProvider>
    </>
)
}