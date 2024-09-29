import { Select } from "@/components/Select";
import { usePatientFormController } from "../../hooks/usePatientForm";

export function GenderSelect() {
  const { field } = usePatientFormController({
    name: "gender",
  });

  return (
    <Select
      options={[
        { label: "남성", value: "M" },
        { label: "여성", value: "F" },
      ]}
      value={field.value}
      onSelect={field.onChange}
      label="성별"
      required
    />
  );
}
