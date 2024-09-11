import { Image, Input, Text, useTheme } from "@rneui/themed";
import { Pressable, View } from "react-native";

export function NurseSignInForm() {
  const { theme } = useTheme();
  return (
    <View
      style={{
        gap: 50,
        justifyContent: "center",
      }}
    >
      <View style={{ gap: 24.5, justifyContent: "center" }}>
        <Input
          leftIcon={
            <Image
              style={{ height: 20, width: 20 }}
              source={require("@/assets/images/id.png")}
            />
          }
          containerStyle={{
            borderColor: theme.colors["#ECECEC"],
            borderRadius: 8,
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 0,
          }}
          placeholder="ID"
          labelStyle={{ display: "none", height: 0, margin: 0 }}
          renderErrorMessage={false}
          inputContainerStyle={{ borderBottomWidth: 0, padding: 0 }}
        />
        <Input
          leftIcon={
            <Image
              style={{ height: 20, width: 20 }}
              source={require("@/assets/images/id.png")}
            />
          }
          containerStyle={{
            borderColor: theme.colors["#ECECEC"],
            borderRadius: 8,
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 0,
          }}
          placeholder="PW"
          labelStyle={{ display: "none", height: 0, margin: 0 }}
          renderErrorMessage={false}
          inputContainerStyle={{ borderBottomWidth: 0, padding: 0 }}
        />
      </View>
      <Pressable
        style={{
          alignItems: "center",
          backgroundColor: theme.colors["#C4C5CC"],
          borderRadius: 8,
          paddingVertical: 10,
        }}
      >
        <Text
          font="Pretendard_700"
          style={{ fontSize: 20, lineHeight: 30 }}
          color="#FFFFFF"
        >
          LOGIN
        </Text>
      </Pressable>
    </View>
  );
}
