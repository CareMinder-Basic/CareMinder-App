import { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Button } from "@rneui/themed";
import { useRouter } from "expo-router";

export default function Intro() {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 이미지 로드
  const images = [
    require("@/assets/images/CV_intro/CV_intro_1.png"),
    require("@/assets/images/CV_intro/CV_intro_2.png"),
    require("@/assets/images/CV_intro/CV_intro_3.png"),
    require("@/assets/images/CV_intro/CV_intro_4.png"),
    require("@/assets/images/CV_intro/CV_intro_5.png"),
    require("@/assets/images/CV_intro/CV_intro_6.png"),
  ];

  const [isLastImage, setIsLastImage] = useState(false);

  // 이미지 변경 함수
  const changeImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsLastImage(true); // 마지막 이미지에 도달하면 이미지 고정
    }
  };
  
  // 2초마다 이미지 변경
  useEffect(() => {
    if (isLastImage) return;

    const interval = setInterval(() => {
      changeImage();
    }, 2000);

    return () => clearInterval(interval); // 타이머 초기화
  }, [currentImageIndex, isLastImage]);


  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ flex: 1 }} onPress={changeImage}>
        <Image
          resizeMode="stretch"
          style={{
            height: "100%",
            width: "100%",
          }}
          source={images[currentImageIndex]} 
        />
      </TouchableOpacity>
        
      {/* 마지막 이미지의 START 버튼 */}
      {isLastImage && (
        <View
          style={{
            position: 'absolute',
            bottom: 50,
            alignSelf: 'center',
            width: 200,
            borderRadius: 100, // 그림자를 감싸는 뷰의 모서리 둥글기
        
            // 그림자 효과 추가
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 8, // 안드로이드에서 그림자 효과를 위한 설정
            }}
        >
          <Button
            title="START"
            buttonStyle={{
              backgroundColor: "#F24679",
              padding: 15,
              borderRadius: 100,
            }}
            titleStyle={{
              fontFamily: "Pretendard_700",
              fontSize: 35,
              color: "#FFFFFF",
            }}
            onPress={() => {
              router.push("../sign-in/nurse");
            }} font={"Pretendard_700"}          
            />
        </View>
      )}
    </View>
  );
}