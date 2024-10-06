import { Pressable } from "react-native";
import { BackSvg } from "./svgs/Back";
import { Text } from "@rneui/themed";

interface BackToMainButtonProps {
  onPress: () => void;
}

export function BackToMainButton({ onPress }: BackToMainButtonProps) {
  return (
    <Pressable
      style={{
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
        left: 20,
        position: "absolute",
        top: 28,
      }}
      onPress={onPress}
    >
      <BackSvg />
      <Text
        color="#000000"
        font="Pretendard_700"
        style={{ fontSize: 18, lineHeight: 26 }}
      >
        메인으로
      </Text>
    </Pressable>
  );
}
