import { Text, useTheme } from "@rneui/themed";
import { Pressable } from "react-native";
import { useNurseSignInFormContext } from "../../hooks/useNurseSignInForm";
import { LinearGradient } from "expo-linear-gradient";

export function SubmitButton() {
  const { theme } = useTheme();
  const { formState, handleSubmit } = useNurseSignInFormContext();
  const { isValid } = formState;

  return isValid ? (
    <Pressable
      style={{
        alignItems: "center",
        borderRadius: 8,
        width: "100%",
      }}
      onPress={handleSubmit(({ id, password }) => {
        console.log(id, password);
      })}
    >
      <LinearGradient
        colors={["#5D6DBE", "#607AFF"]}
        start={{ x: 0.21, y: 0.0 }}
        end={{ x: 0.93, y: 1.0 }}
        style={{
          alignItems: "center",
          borderRadius: 8,
          paddingVertical: 10,
          width: "100%",
        }}
      >
        <Text
          font="Pretendard_700"
          style={{ fontSize: 20, lineHeight: 30 }}
          color="#FFFFFF"
        >
          LOGIN
        </Text>
      </LinearGradient>
    </Pressable>
  ) : (
    <Pressable
      style={{
        alignItems: "center",
        backgroundColor: theme.colors["#C4C5CC"],
        borderRadius: 8,
        paddingVertical: 10,
        width: "100%",
      }}
      disabled
    >
      <Text
        font="Pretendard_700"
        style={{ fontSize: 20, lineHeight: 30 }}
        color="#FFFFFF"
      >
        LOGIN
      </Text>
    </Pressable>
  );
}
