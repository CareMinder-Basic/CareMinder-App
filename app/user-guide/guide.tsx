import { useState } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Image, Button } from "@rneui/themed";
import { useRouter } from "expo-router";
import { SkipButton } from "@/components/SkipButton"; // SkipButton 컴포넌트 불러오기

export default function Guide() {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLastImageLoaded, setIsLastImageLoaded] = useState(false); // 마지막 이미지 로드 상태

  // 이미지 경로 배열
  const images = [
    require("@/assets/images/User_Guide/ug_1.png"),
    require("@/assets/images/User_Guide/ug_2.png"),
  ];

  // 이미지 변경 함수
  const changeImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 이미지 클릭 시 변경 */}
      <TouchableOpacity style={{ flex: 1 }} onPress={changeImage}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={images[currentImageIndex]}
          resizeMode="stretch"
          onLoad={() => {
            // 마지막 이미지가 로드되었는지 감지
            if (currentImageIndex === images.length - 1) {
              setIsLastImageLoaded(true); // 마지막 이미지 로드 완료
            }
          }}
        />
      </TouchableOpacity>

      <SkipButton />


      {/* 마지막 이미지가 로드된 후에만 버튼 표시 */}
      {isLastImageLoaded && (
        <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            bottom: 240,
            right: 256,
          }}
        >
          <Button
            title="음성 요청하기"
            buttonStyle={{
              backgroundColor: "#000000",
              padding: 15,
              borderRadius: 100,
              paddingHorizontal: 44,
              paddingVertical: 14,
            }}
            titleStyle={{
              fontFamily: "Pretendard_700",
              fontSize: 35,
              color: "#FFFFFF",
            }}
            onPress={() => {
              router.push("./guide_2");
            }}
          />
        </View>
      )}
    </View>
  );
}