import { Button } from "@rneui/themed";
import { View } from "react-native";
import { useRouter } from "expo-router";

// SkipButton 컴포넌트 정의
export function SkipButton() {
  const router = useRouter();

  return (
    <View
      style={{
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 40,
        paddingHorizontal: 36,
        paddingVertical: 20,
        width: 212,
        height: 80,
      }}
    >
      <Button
              title="SKIP >>"
              buttonStyle={{
                  backgroundColor: "#C4C5CC",
                  width: "100%",
                  height: "100%",
                  borderRadius: 12,
              }}
              titleStyle={{
                  fontFamily: "Pretendard_700",
                  fontSize: 22,
                  color: "#FFFFFF",
              }}
              onPress={() => {
                router.push("/");  // 뒤로 가기
              } } font={"Pretendard_700"}      />
    </View>
  );
}