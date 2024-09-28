import { useTheme } from "@rneui/themed";
import { Keyboard, View } from "react-native";
import { DescriptionSection } from "./modules/components/DescriptionSection";
import { PatientForm } from "./modules/components/PatientForm/PatientForm";
import { TouchableWithoutFeedback } from "react-native";

export default function SignInPatientPage() {
  const { theme } = useTheme();

  return (
    <TouchableWithoutFeedback
      style={{
        flex: 1,
      }}
      accessible={false}
      onPress={Keyboard.dismiss}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: theme.colors["#FFFFFF"],
          flex: 1,
          gap: 32,
          justifyContent: "center",
          position: "relative",
        }}
      >
        <DescriptionSection />
        <PatientForm />
      </View>
    </TouchableWithoutFeedback>
  );
}
