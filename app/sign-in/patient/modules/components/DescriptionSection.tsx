import { Divider, Image, Text, useTheme } from "@rneui/themed";
import { View } from "react-native";

export function DescriptionSection() {
  const { theme } = useTheme();

  return (
    <View>
      <View style={{ alignItems: "center", gap: 22 }}>
        <Image
          style={{ height: 81.7, width: 98.67 }}
          source={require("@/assets/images/setting-info.png")}
        />
        <View>
          <Text
            style={{ fontSize: 19, lineHeight: 24, textAlign: "center" }}
            font="Pretendard_400"
            color="#5E5F65"
          >
            환영합니다
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={{ fontSize: 19, lineHeight: 24 }}
              font="Pretendard_400"
              color="#5E5F65"
            >
              여러분의 생활을{` `}
            </Text>
            <Text
              style={{ fontSize: 19, lineHeight: 24 }}
              font="Pretendard_700"
              color="#5D6DBE"
            >
              스마트하게 변화시킬{` `}
            </Text>
            <Text
              style={{ fontSize: 19, lineHeight: 24 }}
              font="Pretendard_700"
              color="#000000"
            >
              케어보이스
            </Text>
            <Text
              style={{ fontSize: 19, lineHeight: 24 }}
              font="Pretendard_400"
              color="#5E5F65"
            >
              입니다
            </Text>
          </View>
        </View>
        <Text
          font="Pretendard_400"
          style={{ color: "rgba(94, 95, 101, 0.6)", textAlign: "center" }}
        >
          케어마인더를 시작하기 위해 아래의{`\n`}정보를 기입해 주세요.
        </Text>
        <Divider
          orientation="horizontal"
          style={{ height: 1, width: 344 }}
          color={theme.colors["#ECECEC"]}
        />
      </View>
    </View>
  );
}
