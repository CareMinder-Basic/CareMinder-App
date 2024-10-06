import { useMutation } from "@tanstack/react-query";

interface SttFetchParams {
  uri: string;
}

export const sttFetch = async ({ uri }: SttFetchParams) => {
  const formData = new FormData();

  const fileUri = uri.replace("file://", "");
  const file = { name: "recording.m4a", type: "audio/m4a", uri: fileUri };

  formData.append("file", file as unknown as Blob);
  formData.append("model", "whisper-1");

  const result = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    body: formData,
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENAI_KEY}`,
    },
    method: "POST",
  }).then((data) => data.json());

  return result;
};

export const useSTTMutation = () =>
  useMutation({
    mutationFn: sttFetch,
  });
