import { View } from "react-native";
import { FormProvider } from "react-hook-form";
import { usePatientForm } from "../../hooks/usePatientForm";
import { GenderSelect } from "./GenderSelect";
import { NameInput } from "./NameInput";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { ButtonBox } from "./ButtonBox";

export function PatientForm() {
  const method = usePatientForm();

  return (
    <FormProvider {...method}>
      <View style={{ gap: 70 }}>
        <View style={{ gap: 22 }}>
          <NameInput />
          <GenderSelect />
          <PhoneNumberInput />
        </View>
        <ButtonBox />
      </View>
    </FormProvider>
  );
}
