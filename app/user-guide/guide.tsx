import { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image, Button } from "@rneui/themed";
import { useRouter } from "expo-router";

export default function Guide() {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 이미지 로드
  const images = [
    require("@/assets/images/User_Guide/ug_1.png"),
    require("@/assets/images/User_Guide/ug_2.png"),
  ];

  const [isLastImage, setIsLastImage] = useState(false);

  // 이미지 변경 함수
  const changeImage = () => {
      setCurrentImageIndex(1);
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

      <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            top: 40,
            paddingHorizontal: 36,
            paddingVertical: 20,
            width: 212,
            height: 80,
            }}
        >
          <Button
            title="SKIP >>"
            buttonStyle={{
              backgroundColor: "#C4C5CC",
              width: "100%",
              height: "100%",
              borderRadius: 12,
            }}
            titleStyle={{
              fontFamily: "Pretendard_700",
              fontSize: 22,
              position: "absolute",
              color: "#FFFFFF",
            }}
            onPress={() => {
              router.back()
              //router.push("../sign-in/nurse");
            }} font={"Pretendard_700"}          
            />
        </View>

      {/* 마지막 이미지의 음성 요청 버튼 */}
      {currentImageIndex == 1 && (
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
              // 나중에 수정
              router.push("./guide_2");
            }} font={"Pretendard_700"}  
                  
            />

        </View>
      )}
    </View>
  );
}