import { Text } from "@rneui/themed";
import { View } from "react-native";

export function Title() {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        color="#000000"
        font="Pretendard_600"
        style={{ fontSize: 36, lineHeight: 72 }}
      >
        CAREMINDER
      </Text>
      <Text
        font="Pretendard_500"
        color="#5E5F65"
        style={{ fontSize: 16, lineHeight: 24 }}
      >
        케어마인더에 오신걸 환영합니다.
      </Text>
    </View>
  );
}
