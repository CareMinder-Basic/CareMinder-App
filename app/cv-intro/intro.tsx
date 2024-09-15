import { View, Text } from "react-native";
import { Image } from "@rneui/themed";

export default function intro() {
  return (
    <Image
      resizeMode="stretch"
      style={{
        height: "100%",
        width: "100%",
      }}
      source={require("@/assets/images/CV_intro/CV_intro_1.png")} // 절대 경로 사용
    />
  );
}