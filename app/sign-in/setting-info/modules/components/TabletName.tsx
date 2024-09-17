import { Text, useTheme } from "@rneui/themed";
import { View } from "react-native";

export function TabletName() {
  const { theme } = useTheme();

  return (
    <View
      style={{
        borderColor: theme.colors["#ECECEC"],
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 12,
      }}
    >
      <Text
        color="#5D6DBE"
        font="Pretendard_700"
        style={{ fontSize: 14, lineHeight: 20 }}
      >
        태블릿 이름
      </Text>
      <Text
        color="#5E5F65"
        font="Pretendard_400"
        style={{ fontSize: 14, lineHeight: 20, opacity: 0.6 }}
      >
        Samsung galaxy tab 12
      </Text>
    </View>
  );
}
