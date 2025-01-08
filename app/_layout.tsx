import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import RybenaWebView from "@/components/RybenaWebView";
import { useWebViewRef } from "@/hooks/useWebViewRef";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { elementRef } = useWebViewRef();

  const [loaded] = useFonts({
    Lexend: require("../assets/fonts/Lexend/static/Lexend-Regular.ttf"),
    LexendSemiBold: require("../assets/fonts/Lexend/static/Lexend-SemiBold.ttf"),
    LexendBold: require("../assets/fonts/Lexend/static/Lexend-Bold.ttf"),
    Arvo: require("../assets/fonts/Arvo/Arvo-Regular.ttf"),
    ArvoBold: require("../assets/fonts/Arvo/Arvo-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>

      <RybenaWebView ref={elementRef} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
