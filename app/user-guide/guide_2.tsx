import { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Button } from "@rneui/themed";
import { useRouter } from "expo-router";
import { SkipButton } from "@/components/SkipButton"; // SkipButton 컴포넌트 불러오기

export default function Guide_2() {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 이미지 로드
  const images = [
    require("@/assets/images/User_Guide/ug_3.png"),
    require("@/assets/images/User_Guide/ug_4.png"),
    require("@/assets/images/User_Guide/ug_5.png"),
    require("@/assets/images/User_Guide/ug_6.png"),
    require("@/assets/images/User_Guide/ug_7.png"),
    require("@/assets/images/User_Guide/ug_8.png"),
    require("@/assets/images/User_Guide/ug_9.png"),
    require("@/assets/images/User_Guide/ug_10.png"),
    require("@/assets/images/User_Guide/ug_11.png"),
    require("@/assets/images/User_Guide/ug_12.png"),
    require("@/assets/images/User_Guide/ug_13.png"),
    require("@/assets/images/User_Guide/ug_14.png"),
    require("@/assets/images/User_Guide/ug_15.png"),
    require("@/assets/images/User_Guide/ug_16.png"),
    require("@/assets/images/User_Guide/ug_17.png"),
    require("@/assets/images/User_Guide/ug_18.png"),
    require("@/assets/images/User_Guide/ug_19.png"),
    require("@/assets/images/User_Guide/ug_20.png"),
    require("@/assets/images/User_Guide/ug_21.png"),
    require("@/assets/images/User_Guide/ug_22.png"),
    require("@/assets/images/User_Guide/ug_23.png"),
    require("@/assets/images/User_Guide/ug_24.png"),
    require("@/assets/images/User_Guide/ug_25.png"),
    require("@/assets/images/User_Guide/ug_26.png"),
    require("@/assets/images/User_Guide/ug_27.png"),
  ];

  const [isLastImage, setIsLastImage] = useState(false);

  // 이미지 변경 함수
  const changeImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsLastImage(true); // 마지막 이미지에 도달하면 이미지 고정
      router.push("/"); // 메인 페이지 경로에 맞게 수정
    }
  };
  
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
       
      <SkipButton />
    </View>
  );
}