import { ThemeColors } from "@/constants/styles/themed";
import { Text, useTheme } from "@rneui/themed";
import { router } from "expo-router";
import { useState } from "react";
import {
  Modal,
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
  View,
} from "react-native";

interface ButtonProps extends Omit<PressableProps, "children"> {
  disabled?: boolean;
  children: string;
  color: ThemeColors;
  fontStyle: StyleProp<TextStyle>;
}

function Button({ children, color, fontStyle, ...rest }: ButtonProps) {
  return (
    <Pressable {...rest}>
      <Text color={color} font="Pretendard_700" style={fontStyle}>
        {children}
      </Text>
    </Pressable>
  );
}

interface ButtonBoxProps {
  disabled: boolean;
}

export function ButtonBox({ disabled }: ButtonBoxProps) {
  const { theme } = useTheme();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  return (
    <>
      <View style={{ flexDirection: "row", gap: 12, justifyContent: "center" }}>
        <Button
          fontStyle={{ fontSize: 18, lineHeight: 26 }}
          color="#5E5F65"
          style={{
            borderColor: theme.colors["#ECECEC"],
            borderRadius: 100,
            borderWidth: 1,
            paddingHorizontal: 36,
            paddingVertical: 10,
          }}
          onPress={() => setIsLogoutModalOpen(true)}
        >
          뒤로가기
        </Button>
        <Button
          fontStyle={{ fontSize: 18, lineHeight: 26 }}
          color="#FFFFFF"
          style={{
            backgroundColor: disabled
              ? theme.colors["#C4C5CC"]
              : theme.colors["#5D6DBE"],
            borderRadius: 100,
            paddingHorizontal: 36,
            paddingVertical: 10,
          }}
        >
          시작하기
        </Button>
      </View>
      <Modal visible={isLogoutModalOpen} transparent>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: theme.colors["#FFFFFF"],
              borderRadius: 32,
              gap: 24,
              paddingBottom: 32,
              paddingHorizontal: 32,
              paddingTop: 48,
            }}
          >
            <Text
              font="Pretendard_500"
              style={{
                fontSize: 18,
                lineHeight: 26,
                textAlign: "center",
                width: 280,
              }}
              color="#000000"
            >
              로그아웃 하시겠습니까?
            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: 12,
              }}
            >
              <Button
                color="#5E5F65"
                style={{
                  borderColor: theme.colors["#ECECEC"],
                  borderRadius: 100,
                  borderWidth: 1,
                  paddingHorizontal: 16,
                  paddingVertical: 6,
                }}
                fontStyle={{ fontSize: 16, lineHeight: 24 }}
                onPress={() => setIsLogoutModalOpen(false)}
              >
                이전으로
              </Button>
              <Button
                fontStyle={{ fontSize: 16, lineHeight: 24 }}
                style={{
                  backgroundColor: theme.colors["#5D6DBE"],
                  borderRadius: 100,
                  paddingHorizontal: 16,
                  paddingVertical: 6,
                }}
                color="#FFFFFF"
                onPress={() => {
                  console.log("로그아웃시키기");
                  router.back();
                }}
              >
                로그아웃
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
