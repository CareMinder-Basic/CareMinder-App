import { Image } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { NurseSignInForm } from "./modules/components/NurseSignInForm";
import { Title } from "./modules/components/Title";

export default function SignInNursePage() {
  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        style={{
          flex: 1,
        }}
        accessible={false}
        onPress={Keyboard.dismiss}
      >
        <View style={{ alignItems: "center", flex: 1, flexDirection: "row" }}>
          <LinearGradient
            style={{
              height: "100%",
              width: "60%",
            }}
            colors={["#BEE7FF", "rgba(190, 231, 255, 0)"]}
            start={[0, 0]}
            end={[0, 1]}
          >
            <Image
              resizeMode="stretch"
              style={{
                height: "100%",
                width: "100%",
              }}
              source={require("@/assets/images/CM-frame.png")}
            />
          </LinearGradient>
          <View
            style={{
              flex: 1,
              gap: 40,
              justifyContent: "center",
              paddingHorizontal: 50,
            }}
          >
            <Title />
            <NurseSignInForm />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
