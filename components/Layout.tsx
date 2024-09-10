import { Text, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors["#FFFFFF"],
        flex: 1,
        left: 92,
        top: insets.top,
        width: Dimensions.get("window").width - 92,
      }}
    >
      <StatusBar style="dark" />
      <View
        style={{
          backgroundColor: theme.colors["#EFF1F9"],
          borderRadius: 24,
          flex: 1,
          padding: 24,
        }}
      >
        {children}
      </View>
      <View
        style={{
          backgroundColor: theme.colors["#FFFFFF"],
          height: 60,
        }}
      >
        <Text>123</Text>
      </View>
    </View>
  );
};
