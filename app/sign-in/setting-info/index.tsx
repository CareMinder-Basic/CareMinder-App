import { View } from "react-native";
import { DescriptionSection } from "./modules/components/DescriptionSection";
import { Divider, useTheme } from "@rneui/themed";
import { SettingInfoForm } from "./modules/components/SettingInfoForm";

export default function SettingInfoPage() {
  const { theme } = useTheme();

  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: theme.colors["#FFFFFF"],
        flex: 1,
        gap: 32,
        justifyContent: "center",
        position: "relative",
      }}
    >
      <DescriptionSection />
      <Divider
        orientation="horizontal"
        style={{ height: 1, width: 344 }}
        color={theme.colors["#ECECEC"]}
      />
      <SettingInfoForm />
    </View>
  );
}
