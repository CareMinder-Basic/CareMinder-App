import { Text, useTheme } from "@rneui/themed";
import { ReactNode } from "react";
import { View } from "react-native";

interface FormBaseProps {
  label: string;
  rightNode?: ReactNode;
  required?: boolean;
}

export function FormBase({ label, rightNode, required = true }: FormBaseProps) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        borderColor: theme.colors["#ECECEC"],
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 12,
      }}
    >
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Text
          color="#5D6DBE"
          font="Pretendard_700"
          style={{ fontSize: 14, lineHeight: 20 }}
        >
          {label}
        </Text>
        {required && (
          <Text
            font="Pretendard_700"
            color="#FF7253"
            style={{ fontSize: 14, lineHeight: 20 }}
          >
            *
          </Text>
        )}
      </View>
      {rightNode}
    </View>
  );
}
