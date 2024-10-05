import { Audio } from "expo-av";
import { useState } from "react";

export const useRecord = () => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync();
      setRecording(recording);
    } catch (error) {
      console.error("Failed to start recording", error);
    }
  };

  const stopRecording = async ({
    onSuccess,
  }: {
    onSuccess: (uri: string) => void;
  }) => {
    setRecording(null);
    await recording?.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording?.getURI();

    if (uri) {
      onSuccess(uri);
    }
  };

  return { recording, startRecording, stopRecording };
};
