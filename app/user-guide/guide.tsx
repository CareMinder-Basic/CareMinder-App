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
  ];



  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ flex: 1 }}>
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
            bottom: 50,
            alignSelf: 'flex-end',
            width: 202,
            height: 80,
            padding: 18,
            }}
        >
          <Button
            title="START"
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
    </View>
  );
}