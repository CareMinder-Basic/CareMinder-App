import { Layout } from "@/components/Layout";
import { View } from "react-native";
import { RequestSection } from "./modules/components/RequestSection";

export default function HomeScreen() {
  return (
    <Layout>
      <View style={{ flex: 1 }}>
        <RequestSection />
      </View>
    </Layout>
  );
}
