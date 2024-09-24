import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const nurseSignInSchema = z.object({
  id: z.string().min(1),
  password: z.string().min(1),
});

type NurseSignInSchema = z.infer<typeof nurseSignInSchema>;

export const useNurseSignInForm = () =>
  useForm<NurseSignInSchema>({
    mode: "all",
    resolver: zodResolver(nurseSignInSchema),
  });

export const useNurseSignInFormContext = () =>
  useFormContext<NurseSignInSchema>();
