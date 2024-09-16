import { Image, Input, useTheme } from "@rneui/themed";
import { useNurseSignInFormContext } from "../../hooks/useNurseSignInForm";
import { useController } from "react-hook-form";

export function IdInput() {
  const { theme } = useTheme();
  const { control } = useNurseSignInFormContext();
  const { field } = useController({
    control,
    name: "id",
  });

  return (
    <Input
      value={field.value}
      onChangeText={field.onChange}
      leftIcon={
        <Image
          style={{ height: 20, width: 20 }}
          source={require("@/assets/images/id.png")}
        />
      }
      containerStyle={{
        borderColor: theme.colors["#ECECEC"],
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 0,
      }}
      placeholder="ID"
      labelStyle={{ display: "none", height: 0, margin: 0 }}
      renderErrorMessage={false}
      inputContainerStyle={{ borderBottomWidth: 0, padding: 0 }}
    />
  );
}
