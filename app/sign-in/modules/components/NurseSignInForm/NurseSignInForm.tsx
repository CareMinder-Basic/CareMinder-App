import { View } from "react-native";
import { useNurseSignInForm } from "../../hooks/useNurseSignInForm";
import { FormProvider } from "react-hook-form";
import { IdInput } from "./IdInput";
import { PasswordInput } from "./PasswordInput";
import { SubmitButton } from "./SubmitButton";

export function NurseSignInForm() {
  const method = useNurseSignInForm();

  return (
    <FormProvider {...method}>
      <View
        style={{
          gap: 50,
          justifyContent: "center",
        }}
      >
        <View style={{ gap: 24.5, justifyContent: "center" }}>
          <IdInput />
          <PasswordInput />
        </View>
        <SubmitButton />
      </View>
    </FormProvider>
  );
}
