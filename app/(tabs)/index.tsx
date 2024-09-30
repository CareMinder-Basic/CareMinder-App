import { ScrollView, View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { Layout } from "@/components/Layout";
import { router } from "expo-router";

export default function HomeScreen() {
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

        <View style={{ backgroundColor: "blue", minHeight: 800 }}>
          <Text font={"Pretendard_700"} color={"#F24679"}>
            123213
          </Text>
        </View>
        <View style={{ backgroundColor: "white", minHeight: 800 }}>
          <Text font={"Pretendard_700"} color={"#F24679"}>
            44444
          </Text>
        </View>
      </ScrollView>
    </Layout>
  );
}
