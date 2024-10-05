import { UnionSvg } from "@/components/svgs/Union";
import { Text, useTheme } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, View } from "react-native";

interface VerticalLineProps {
  height: number;
}

function VerticalLine({ height }: VerticalLineProps) {
  return (
    <View
      style={{
        backgroundColor: "#8e9bdb",
        borderRadius: 100,
        height,
        width: 12,
      }}
    />
  );
}

export function RequestSection() {
  const { theme } = useTheme();
  return (
    <LinearGradient
      style={{
        alignItems: "center",
        gap: 32,
        height: "100%",
        justifyContent: "center",
        width: "60%",
      }}
      start={[0, 0]}
      end={[0, 1]}
      colors={[theme.colors["#5D6DBE"], theme.colors["#607AFF"]]}
    >
      <View style={{ alignItems: "center", flexDirection: "row", gap: 18 }}>
        <View style={{ alignItems: "center", flexDirection: "row", gap: 16 }}>
          <VerticalLine height={40} />
          <VerticalLine height={62} />
          <VerticalLine height={98} />
          <VerticalLine height={62} />
        </View>
        <UnionSvg />
        <View style={{ alignItems: "center", flexDirection: "row", gap: 16 }}>
          <VerticalLine height={62} />
          <VerticalLine height={98} />
          <VerticalLine height={62} />
          <VerticalLine height={40} />
        </View>
      </View>
      <Text
        font="Pretendard_700"
        color="#FFFFFF"
        style={{ fontSize: 40, lineHeight: 72 }}
      >
        요청사항을 말씀해주세요
      </Text>
      <Text
        font="Pretendard_500"
        color="#FFFFFF"
        style={{ fontSize: 20, lineHeight: 30 }}
      >
        자동으로 간호사에게 전달됩니다.
      </Text>
      <Pressable
        style={{
          backgroundColor: theme.colors["#000000"],
          borderRadius: 100,
          paddingHorizontal: 44,
          paddingVertical: 14,
        }}
        onPress={() => router.push("/request/recording")}
      >
        <Text
          font="Pretendard_500"
          color="#FFFFFF"
          style={{ fontSize: 30, lineHeight: 30 }}
        >
          음성 요청하기
        </Text>
      </Pressable>
    </LinearGradient>
  );
}
