import { zodResolver } from "@hookform/resolvers/zod";
import {
  UseControllerProps,
  useController,
  useForm,
  useFormContext,
} from "react-hook-form";
import { z } from "zod";

const patientSchema = z.object({
  gender: z.enum(["M", "F"]),
  name: z.string().min(1),
  phoneNumber: z.string().optional(),
});

type PatientSchema = z.infer<typeof patientSchema>;

export const usePatientForm = () =>
  useForm<PatientSchema>({
    mode: "all",
    resolver: zodResolver(patientSchema),
  });

export const usePatientFormContext = () => useFormContext<PatientSchema>();

export const usePatientFormController = (
  // eslint-disable-next-line prettier/prettier
  props: Omit<UseControllerProps<PatientSchema>, "control">
) => {
  const { control } = usePatientFormContext();

  return useController({
    control,
    ...props,
  });
};
