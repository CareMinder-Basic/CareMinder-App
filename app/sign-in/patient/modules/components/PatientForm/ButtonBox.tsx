import { Text, useTheme } from "@rneui/themed";
import { Pressable, View } from "react-native";
import { usePatientFormContext } from "../../hooks/usePatientForm";
import { router } from "expo-router";

export function ButtonBox() {
  const { theme } = useTheme();
  const { formState } = usePatientFormContext();
  const { isValid } = formState;

  return (
    <View style={{ flexDirection: "row", gap: 12 }}>
      <Pressable
        style={{
          alignItems: "center",
          borderColor: theme.colors["#ECECEC"],
          borderRadius: 100,
          borderWidth: 1,
          justifyContent: "center",
          paddingVertical: 10,
          width: 172,
        }}
        onPress={() => router.back()}
      >
        <Text
          font="Pretendard_700"
          color="#5E5F65"
          style={{ fontSize: 18, lineHeight: 26 }}
        >
          뒤로가기
        </Text>
      </Pressable>
      <Pressable
        style={{
          alignItems: "center",
          backgroundColor: isValid
            ? theme.colors["#5D6DBE"]
            : theme.colors["#C4C5CC"],
          borderRadius: 100,
          justifyContent: "center",
          paddingVertical: 10,
          width: 172,
        }}
      >
        <Text
          font="Pretendard_700"
          color="#FFFFFF"
          style={{ fontSize: 18, lineHeight: 26 }}
        >
          시작하기
        </Text>
      </Pressable>
    </View>
  );
}
