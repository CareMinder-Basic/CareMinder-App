import { TextInput } from "react-native";
import { FormBase } from "./FormBase";
import { usePatientFormController } from "../../hooks/usePatientForm";

export function NameInput() {
  const { field } = usePatientFormController({
    name: "name",
  });

  return (
    <FormBase
      label="환자 성명"
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
        />
      }
    />
  );
}
