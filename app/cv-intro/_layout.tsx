// app/cv-intro/_layout.tsx
import { Stack } from "expo-router";

export default function CvIntroLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 헤더 숨기기
      }}
    />
  );
}