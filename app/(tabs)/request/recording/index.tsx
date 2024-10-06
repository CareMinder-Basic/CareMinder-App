import { Layout } from "@/components/Layout";
import { UnionSvg } from "@/components/svgs/Union";
import { useRecord } from "@/hooks/useRecord";
import { Image, Text, useTheme } from "@rneui/themed";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { useSTTMutation } from "./modules/mutations/useSTTMutation";
import { BackToMainButton } from "@/components/BackToMainButton";

interface VerticalLineProps {
  height: number;
  color: "#EFF1F9" | "#5D6DBE";
}

function VerticalLine({ height, color }: VerticalLineProps) {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 100,
        height,
        width: 16,
      }}
    />
  );
}

export default function RequestRecordingPage() {
  const { theme } = useTheme();
  const { startRecording, stopRecording } = useRecord();
  const { mutate } = useSTTMutation();
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  useFocusEffect(
    useCallback(() => {
      startRecording();
    }, [])
  );

  const handleBack = async () => {
    await stopRecording({
      onSuccess: () => {},
    });
    router.back();
  };

  const handleComplete = () => {
    stopRecording({
      onSuccess: (uri) => {
        mutate(
          { uri },
          {
            onError: () => {
              setIsErrorModalOpen(true);
            },
            onSuccess: (data) => {
              if (data.text === "") {
                setIsErrorModalOpen(true);
                return;
              }
              router.push({
                params: {
                  text: data.text,
                },
                pathname: "/request/complete",
              });
            },
          }
        );
      },
    });
  };

  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
    router.back();
  };

  return (
    <Layout>
      <View
        style={{
          backgroundColor: theme.colors["#EFF1F9"],
          borderRadius: 24,
          flex: 1,
          padding: 24,
          position: "relative",
        }}
      >
        <View
          style={{
            alignItems: "center",
            backgroundColor: theme.colors["#FFFFFF"],
            borderRadius: 24,
            flex: 1,
            gap: 52,
            justifyContent: "center",
          }}
        >
          <BackToMainButton onPress={() => router.back()} />
          <View style={{ gap: 32 }}>
            <View style={{ flexDirection: "row", gap: 24 }}>
              <View
                style={{ alignItems: "center", flexDirection: "row", gap: 22 }}
              >
                <VerticalLine height={52} color="#5D6DBE" />
                <VerticalLine height={81} color="#5D6DBE" />
                <VerticalLine height={130} color="#5D6DBE" />
                <VerticalLine height={81} color="#5D6DBE" />
                <VerticalLine height={52} color="#5D6DBE" />
                <VerticalLine height={81} color="#5D6DBE" />
                <VerticalLine height={130} color="#EFF1F9" />
                <VerticalLine height={81} color="#EFF1F9" />
              </View>
              <UnionSvg color={theme.colors["#5D6DBE"]} />
              <View
                style={{ alignItems: "center", flexDirection: "row", gap: 22 }}
              >
                <VerticalLine height={81} color="#EFF1F9" />
                <VerticalLine height={130} color="#EFF1F9" />
                <VerticalLine height={81} color="#EFF1F9" />
                <VerticalLine height={52} color="#EFF1F9" />
                <VerticalLine height={81} color="#EFF1F9" />
                <VerticalLine height={130} color="#EFF1F9" />
                <VerticalLine height={81} color="#EFF1F9" />
                <VerticalLine height={52} color="#EFF1F9" />
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                font="Pretendard_700"
                style={{ fontSize: 40, lineHeight: 72 }}
                color="#000000"
              >
                요청사항을 말씀해주세요.
              </Text>
              <Text
                font="Pretendard_500"
                color="#000000"
                style={{ fontSize: 20, lineHeight: 30 }}
              >
                음성을 인식중입니다.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 23 }}>
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
              onPress={handleBack}
            >
              <Text
                font="Pretendard_700"
                color="#5E5F65"
                style={{ fontSize: 20, lineHeight: 30 }}
              >
                뒤로가기
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
              onPress={handleComplete}
            >
              <Text
                font="Pretendard_700"
                color="#FFFFFF"
                style={{ fontSize: 20, lineHeight: 30 }}
              >
                완료하기
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Modal transparent visible={isErrorModalOpen}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "rgba(140, 142, 148, 0.7)",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: theme.colors["#FFFFFF"],
              borderRadius: 24,
              gap: 24,
              justifyContent: "center",
              paddingBottom: 32,
              paddingTop: 24,
              width: 344,
            }}
          >
            <View style={{ alignItems: "center", gap: 20 }}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require("@/assets/images/warning.png")}
              />
              <Text
                font="Pretendard_500"
                style={{ fontSize: 18, lineHeight: 26 }}
                color="#000000"
              >
                인식된 텍스트가 없습니다
              </Text>
            </View>
            <Pressable
              style={{
                alignItems: "center",
                backgroundColor: theme.colors["#5D6DBE"],
                borderRadius: 100,
                justifyContent: "center",
                paddingVertical: 6,
                width: 108,
              }}
              onPress={handleErrorModalClose}
            >
              <Text
                font="Pretendard_700"
                color="#FFFFFF"
                style={{ fontSize: 16, lineHeight: 24 }}
              >
                확인
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Layout>
  );
}
