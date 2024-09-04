import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        left: 92,
        top: 76 + insets.top,
      }}
    >
      <StatusBar style="dark" />
      {children}
    </View>
  );
};
