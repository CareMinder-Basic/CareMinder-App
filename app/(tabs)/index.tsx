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
        <View 
          style={{
            flex: 11,
            backgroundColor: '#EFF1F9',  
            borderRadius: 12,
          }}>
          <ServiceMenu />
        </View>

        {/* 오른쪽 RequestSection 섹션 */}
        <View
          style={{
            flex: 19,
            paddingLeft: 20,
          }}
        >
          <RequestSection />
        </View>
      </View>
    </Layout>
  );
}