import { Layout } from "@/components/Layout";
import { Button } from "@rneui/themed";
import { router } from "expo-router";
import { ScrollView } from "react-native";

export default function TabTwoScreen() {
  return (
    <Layout>
      <ScrollView
        style={{
          backgroundColor: "gray",
        }}
      >
        <Button
          font="Pretendard_100"
          onPress={() => {
            router.push("./sign-in/nurse");
          }}
        >
          로그인 페이지
        </Button>

        <Button
          buttonStyle={{ backgroundColor: "#5D6DBE" }}
          font="Pretendard_100"
          onPress={() => {
            router.push("./cv-intro/intro");
          }}
        >
          케어보이스 소개
        </Button>

        <Button
          buttonStyle={{ backgroundColor: "#5D6DBE" }}
          font="Pretendard_100"
          onPress={() => {
            router.push("/sign-in/setting-info");
          }}
        >
          구역 설정 페이지
        </Button>

        <Button
          buttonStyle={{ backgroundColor: "#BEE7FF" }}
          font="Pretendard_100"
          onPress={() => {
            router.push("/sign-in/patient");
          }}
        >
          환자 로그인 페이지
        </Button>

        <Button
          buttonStyle={{ backgroundColor: "#5D6DBE" }}
          font="Pretendard_100"
          onPress={() => {
            router.push("/user-guide/guide");
          }}
        >
          유저 가이드
        </Button>
      </ScrollView>
    </Layout>
  );
}
