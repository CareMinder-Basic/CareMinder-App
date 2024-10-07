import { BackToMainButton } from "@/components/BackToMainButton";
import { Layout } from "@/components/Layout";
import { useRoute } from "@react-navigation/native";
import { Image, Text, useTheme } from "@rneui/themed";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from "react-native";

export default function RequestCompletePage() {
  const { params } = useRoute();
  const { theme } = useTheme();
  const defaultText = (params as any).text;

  return (
    <Layout>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              backgroundColor: theme.colors["#EFF1F9"],
              borderRadius: 24,
              flex: 1,
              padding: 24,
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: theme.colors["#FFFFFF"],
                borderRadius: 24,
                flex: 1,
                justifyContent: "center",
                position: "relative",
              }}
            >
              <BackToMainButton onPress={() => router.replace("/")} />
              <Image
                source={require("@/assets/images/check.png")}
                style={{ height: 192, resizeMode: "cover", width: 192 }}
              />
              <View style={{ gap: 36 }}>
                <View style={{ gap: 16 }}>
                  <Text
                    font="Pretendard_700"
                    color="#000000"
                    style={{ fontSize: 38, lineHeight: 52 }}
                  >
                    인식이 완료되었습니다. 내용을 확인해주세요.
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      font="Pretendard_400"
                      style={{ fontSize: 20, lineHeight: 30 }}
                      color="#5E5F65"
                    >
                      수정을 원하실 경우,
                    </Text>
                    <Text
                      font="Pretendard_700"
                      color="#5D6DBE"
                      style={{ fontSize: 20, lineHeight: 30 }}
                    >
                      ‘다시 녹음’
                    </Text>
                    <Text
                      font="Pretendard_400"
                      color="#5E5F65"
                      style={{ fontSize: 20, lineHeight: 30 }}
                    >
                      또는 인식된 텍스트를 클릭하여 수정을 하실 수 있습니다.
                    </Text>
                  </View>
                </View>
                <View style={{ gap: 16, width: 656 }}>
                  <TextInput
                    style={{
                      color: theme.colors["#5D6DBE"],
                      fontFamily: "Pretendard_700",
                      fontSize: 38,
                      lineHeight: 52,
                      textAlign: "center",
                    }}
                    defaultValue={defaultText}
                    multiline
                    numberOfLines={2}
                    scrollEnabled
                    onContentSizeChange={(e) => {
                      const height = e.nativeEvent.contentSize.height;
                      if (height <= 52) {
                        e.target.setNativeProps({ style: { height: 52 } });
                      } else if (height <= 104) {
                        e.target.setNativeProps({ style: { height: 104 } });
                      }
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: theme.colors["#ECECEC"],
                      height: 3.5,
                    }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row", gap: 23, paddingTop: 50 }}>
                <Pressable
                  style={{
                    alignItems: "center",
                    borderColor: theme.colors["#C4C5CC"],
                    borderRadius: 100,
                    borderWidth: 1,
                    justifyContent: "center",
                    paddingVertical: 10,
                    width: 230,
                  }}
                  onPress={() => router.replace("/")}
                >
                  <Text
                    style={{ fontSize: 20, lineHeight: 30 }}
                    font="Pretendard_700"
                    color="#5E5F65"
                  >
                    요청 취소하기
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    alignItems: "center",
                    backgroundColor: theme.colors["#5D6DBE"],
                    borderRadius: 100,
                    justifyContent: "center",
                    paddingVertical: 10,
                    width: 230,
                  }}
                >
                  <Text
                    style={{ fontSize: 20, lineHeight: 30 }}
                    font="Pretendard_700"
                    color="#FFFFFF"
                  >
                    요청 전송하기
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Layout>
  );
}
