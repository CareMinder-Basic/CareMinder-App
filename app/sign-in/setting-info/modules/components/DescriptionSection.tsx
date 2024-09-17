import { Image, Text } from "@rneui/themed";
import { View } from "react-native";

export function DescriptionSection() {
  return (
    <View style={{ gap: 10 }}>
      <View style={{ alignItems: "center", gap: 23, justifyContent: "center" }}>
        <Image
          style={{ height: 81.7, width: 98.67 }}
          source={require("@/assets/images/setting-info.png")}
        />
        <Text
          color="#5D6DBE"
          style={{ fontSize: 20, lineHeight: 30 }}
          font="Pretendard_700"
        >
          시작하기
        </Text>
      </View>
      <Text
        font="Pretendard_400"
        color="#5E5F65"
        style={{ opacity: 0.6, textAlign: "center" }}
      >
        케어마인더를 시작하기 위해 아래의{"\n"} 정보를 기입해 주세요.
      </Text>
    </View>
  );
}
