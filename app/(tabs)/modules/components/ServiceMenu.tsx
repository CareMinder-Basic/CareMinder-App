import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function ServiceMenu() {
  // 선택된 카테고리를 관리하는 상태
  const [selectedCategory, setSelectedCategory] = useState('hospitalGuide');

  // 카테고리별 서비스 목록
  const services = {
    hospitalGuide: [
      '병원 만족도 조사',
      '병원 소식',
      '의료진 소개',
      '병원 홈페이지',
    ],
    quickRequest: [
      '시트 교체',
      '수액 교체',
      '화장실 사용 요청',
      '화장실 위치',
      '주차 관련 문의',
    ],
    mealInfo: [
      '환자 식단 안내',
      '식단 이력 조회',
      '식사 만족도 조사',
    ],
    otherServices: [
      '유튜브',
    ],
  };

  // 현재 선택된 서비스 목록을 반환
  const renderServiceList = () => {
    return services[selectedCategory].map((service, index) => (
      <Text key={index} style={styles.serviceItem}>
        {service}
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      {/* 카테고리 버튼 */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.menuButton, selectedCategory === 'hospitalGuide' && styles.activeButton]}
          onPress={() => setSelectedCategory('hospitalGuide')}
        >
          <Text style={styles.menuButtonText}>병원 안내</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, selectedCategory === 'quickRequest' && styles.activeButton]}
          onPress={() => setSelectedCategory('quickRequest')}
        >
          <Text style={styles.menuButtonText}>빠른 요청</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, selectedCategory === 'mealInfo' && styles.activeButton]}
          onPress={() => setSelectedCategory('mealInfo')}
        >
          <Text style={styles.menuButtonText}>식사 안내</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, selectedCategory === 'otherServices' && styles.activeButton]}
          onPress={() => setSelectedCategory('otherServices')}
        >
          <Text style={styles.menuButtonText}>기타 서비스</Text>
        </TouchableOpacity>
      </View>

      {/* 선택된 서비스 목록 */}
      <ScrollView style={styles.serviceListContainer}>
        {renderServiceList()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  menuButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#d3d3d3',
  },
  activeButton: {
    backgroundColor: '#5D6DBE',
  },
  menuButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  serviceListContainer: {
    flex: 1,
    marginTop: 10,
  },
  serviceItem: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});