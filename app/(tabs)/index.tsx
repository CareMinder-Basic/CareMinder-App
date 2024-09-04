import { ScrollView, View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { Layout } from "@/components/Layout";

export default function HomeScreen() {
  return (
    <Layout>
      <ScrollView
        style={{
          backgroundColor: "gray",
        }}
      >
        <Button font="Pretendard_100" onPress={() => alert("test")}>
          click
        </Button>
        <View style={{ backgroundColor: "blue", minHeight: 800 }}>
          <Text>123213</Text>
        </View>
        <View style={{ backgroundColor: "white", minHeight: 800 }}>
          <Text>44444</Text>
        </View>
      </ScrollView>
    </Layout>
  );
}
