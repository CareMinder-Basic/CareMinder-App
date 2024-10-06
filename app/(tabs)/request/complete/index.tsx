import { Layout } from "@/components/Layout";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";

export default function RequestCompletePage() {
  const { params } = useRoute();
  console.log(params);
  return (
    <Layout>
      <View style={{ flex: 1 }}></View>
    </Layout>
  );
}
