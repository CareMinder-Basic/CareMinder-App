import React from 'react';
import { View } from 'react-native';
import { useTheme, Button, Chip, Text } from '@rneui/themed';
import ServiceMenu from './modules/components/ServiceMenu';
import { RequestSection } from './modules/components/RequestSection';
import { Layout } from "@/components/Layout";

export default function HomeScreen() {
  // 테마 사용
  const { theme } = useTheme();

  return (
    <Layout>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {/* 왼쪽 ServiceMenu 섹션 */}
        <View style={{ flex: 1, padding: theme.spacing.md }}>
          <ServiceMenu />
        </View>

        {/* 오른쪽 RequestSection 섹션 */}
        <View
          style={{
            flex: 1,
            padding: theme.spacing.md,
            justifyContent: 'center',
            alignItems: 'center',
            //backgroundColor: , // 테마의 색상 사용
          }}
        >
          <RequestSection />
        </View>
      </View>
    </Layout>
  );
}