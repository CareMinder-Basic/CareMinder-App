import React, { useRef, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useTheme } from '@rneui/themed';
import ServiceButton from "@/components/ServiceButton"; // ServiceButton 컴포넌트 가져오기
import { CategoryButton } from "@/components/CategoryButton"; // ServiceButton 컴포넌트 가져오기

export default function ServiceMenu() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('hospitalGuide');

  // ScrollView 및 각 섹션 참조 생성
  const scrollViewRef = useRef(null);
  const hospitalGuideRef = useRef(null);
  const quickRequestRef = useRef(null);
  const mealInfoRef = useRef(null);
  const otherServicesRef = useRef(null);

  // 섹션으로 스크롤하는 함수
  const scrollToSection = (ref) => {
    ref.current.measureLayout(scrollViewRef.current, (x, y) => {
      scrollViewRef.current.scrollTo({ y, animated: true });
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 카테고리 버튼 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <CategoryButton
          title="병원 안내"
          isActive={selectedCategory === 'hospitalGuide'}
          onPress={() => {
            setSelectedCategory('hospitalGuide');
            scrollToSection(hospitalGuideRef);
          }}
        />
        <CategoryButton
          title="빠른 요청"
          isActive={selectedCategory === 'quickRequest'}
          onPress={() => {
            setSelectedCategory('quickRequest');
            scrollToSection(quickRequestRef);
          }}
        />
        <CategoryButton
          title="식사 안내"
          isActive={selectedCategory === 'mealInfo'}
          onPress={() => {
            setSelectedCategory('mealInfo');
            scrollToSection(mealInfoRef);
          }}
        />
        <CategoryButton
          title="기타"
          isActive={selectedCategory === 'otherServices'}
          onPress={() => {
            setSelectedCategory('otherServices');
            scrollToSection(otherServicesRef);
          }}
        />
      </View>

      {/* 서비스 목록 */}
      <ScrollView ref={scrollViewRef} contentContainerStyle={{ padding: 20 }}>
        {/* 병원 안내 섹션 */}
        <View ref={hospitalGuideRef} style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>병원 안내</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <ServiceButton title="병원 만족도 조사" icon="heartbeat" />
            <ServiceButton title="병원 소식" icon="building" />
            <ServiceButton title="의료진 소개" icon="user-md" />
            <ServiceButton title="병원 홈페이지" icon="desktop" />
          </View>
        </View>

        {/* 빠른 요청 섹션 */}
        <View ref={quickRequestRef} style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>빠른 요청</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <ServiceButton title="시트 교체" icon="shopping-cart" />
            <ServiceButton title="수액 교체" icon="medkit" />
            <ServiceButton title="화장실 사용 요청" icon="bath" />
            <ServiceButton title="화장실 위치" icon="map-marker" />
            <ServiceButton title="주차 관련 문의" icon="car" />
          </View>
        </View>

        {/* 식사 안내 섹션 */}
        <View ref={mealInfoRef} style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>식사 안내</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <ServiceButton title="환자 식단 안내" icon="cutlery" />
            <ServiceButton title="식단 이력 조회" icon="history" />
            <ServiceButton title="식사 만족도 조사" icon="car" />
          </View>
        </View>

        {/* 기타 서비스 섹션 */}
        <View ref={otherServicesRef} style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>기타 서비스</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <ServiceButton title="      유튜브      " icon="youtube" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}