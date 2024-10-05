import { Layout } from "@/components/Layout";
import { useRecord } from "@/hooks/useRecord";
import { Text, useTheme } from "@rneui/themed";
import { useEffect } from "react";
import { View } from "react-native";

export default function RequestRecordingPage() {
  const { theme } = useTheme();
  const { startRecording, stopRecording, recording } = useRecord();

  useEffect(() => {
    if (recording) return;
    startRecording();
  }, [startRecording, recording]);

  return (
    <Layout>
      <View
        style={{
          backgroundColor: theme.colors["#EFF1F9"],
          borderRadius: 24,
          flex: 1,
          padding: 24,
        }}
      >
        <Text>123</Text>
      </View>
    </Layout>
  );
}
