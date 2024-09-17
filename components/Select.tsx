import { Image, Text, useTheme } from "@rneui/themed";
import { useEffect, useRef, useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

interface SelectProps {
  options: { value: string; label: string }[];
  placeholder: string;
  label: string;
  onSelect: (value: string) => void;
  style?: ViewStyle;
  value?: string;
}

export function Select({
  label,
  onSelect,
  options,
  placeholder,
  style,
  value,
}: SelectProps) {
  const [selected, setSelected] = useState(false);
  const { theme } = useTheme();
  const selectTriggerRef = useRef<View>(null);
  const [buttonPosition, setButtonPosition] = useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    if (selectTriggerRef.current) {
      selectTriggerRef.current.measure((fx, fy, w, h, px, py) => {
        setButtonPosition({ height: h, width: w, x: px, y: py });
      });
    }
  }, [selectTriggerRef.current]);

  return (
    <>
      <Pressable
        style={{
          alignItems: "center",
          borderBottomLeftRadius: selected ? 0 : 8,
          borderBottomRightRadius: selected ? 0 : 8,
          borderBottomWidth: selected ? 0 : 1,
          borderColor: theme.colors["#ECECEC"],
          borderLeftWidth: 1,
          borderRadius: 8,
          borderRightWidth: 1,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderTopWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 12,
          ...style,
        }}
        ref={selectTriggerRef}
        onPress={() => setSelected(true)}
      >
        <Text
          color="#5D6DBE"
          font="Pretendard_700"
          style={{ fontSize: 14, lineHeight: 20 }}
        >
          {label}
        </Text>
        <View style={{ alignItems: "center", flexDirection: "row", gap: 6 }}>
          <Text
            font="Pretendard_400"
            color={
              selectedOption?.value
                ? theme.colors["#000000"]
                : theme.colors["#5E5F65"]
            }
            style={{ opacity: selectedOption?.value ? 1 : 0.6 }}
          >
            {selectedOption?.label || placeholder}
          </Text>
          <Image
            style={{ height: 16, width: 16 }}
            source={require("@/assets/images/dropdown.png")}
          />
        </View>
      </Pressable>
      <Modal visible={selected} transparent>
        <TouchableWithoutFeedback onPress={() => setSelected(false)}>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback>
              <View
                style={{
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomWidth: 1,
                  borderColor: theme.colors["#ECECEC"],
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  left: buttonPosition.x,
                  position: "absolute",
                  top: buttonPosition.y + buttonPosition.height,
                  width: buttonPosition.width,
                }}
              >
                <ScrollView
                  style={{
                    backgroundColor: theme.colors["#FFFFFF"],
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    height: 140,
                  }}
                  showsVerticalScrollIndicator
                  indicatorStyle="black"
                  scrollIndicatorInsets={{ right: 1 }}
                >
                  {options?.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      onPress={() => {
                        onSelect(option.value);
                        setSelected(false);
                      }}
                      style={{
                        alignItems: "flex-end",
                        paddingHorizontal: 42,
                        paddingVertical: 6,
                      }}
                    >
                      <Text
                        font="Pretendard_400"
                        style={{ fontSize: 14, lineHeight: 20 }}
                        color={
                          selectedOption?.value === option.value
                            ? theme.colors["#5D6DBE"]
                            : theme.colors["#000000"]
                        }
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}
