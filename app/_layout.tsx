import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { ThemeProvider as RneuiThemeProvider } from "@rneui/themed";
import { theme } from "@/constants/styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/store/queryClient";

import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar"; // Import NavigationBar

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Pretendard_100: require("../assets/fonts/Pretendard-Thin.ttf"),
    Pretendard_200: require("../assets/fonts/Pretendard-ExtraLight.ttf"),
    Pretendard_300: require("../assets/fonts/Pretendard-Light.ttf"),
    Pretendard_400: require("../assets/fonts/Pretendard-Regular.ttf"),
    Pretendard_500: require("../assets/fonts/Pretendard-Medium.ttf"),
    Pretendard_600: require("../assets/fonts/Pretendard-SemiBold.ttf"),
    Pretendard_700: require("../assets/fonts/Pretendard-Bold.ttf"),
    Pretendard_800: require("../assets/fonts/Pretendard-ExtraBold.ttf"),
    Pretendard_900: require("../assets/fonts/Pretendard-Black.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    if (Platform.OS === "android") {
      NavigationBar.setVisibilityAsync("hidden");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RneuiThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="sign-in/nurse/index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="sign-in/setting-info/index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="sign-in/patient/index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="cv-intro/intro"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="user-guide/guide"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="user-guide/guide_2"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </QueryClientProvider>
    </RneuiThemeProvider>
  );
}
