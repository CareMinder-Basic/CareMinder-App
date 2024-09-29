import { TextInput } from "react-native";
import { usePatientFormController } from "../../hooks/usePatientForm";
import { FormBase } from "./FormBase";

export function PhoneNumberInput() {
  const { field } = usePatientFormController({
    name: "phoneNumber",
  });

  return (
    <FormBase
      label="휴대폰 번호"
      required={false}
      rightNode={
        <TextInput
          value={field.value || ""}
          onChangeText={field.onChange}
          style={{
            fontFamily: "Pretendard_400",
            fontSize: 14,
            textAlign: "right",
            width: 222,
          }}
          keyboardType="phone-pad"
        />
      }
    />
  );
}
