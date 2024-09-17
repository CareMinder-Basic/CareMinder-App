import { Select } from "@/components/Select";
import { useState } from "react";

import { View } from "react-native";
import { TabletName } from "./TabletName";
import { ButtonBox } from "./ButtonBox";

const OPTIONS = [
  { label: "응급실", value: "1" },
  { label: "구역1", value: "2" },
  { label: "구역2", value: "3" },
  { label: "구역3", value: "4" },
  { label: "구역4", value: "5" },
  { label: "구역5", value: "6" },
  { label: "구역6", value: "7" },
  { label: "구역7", value: "8" },
  { label: "구역8", value: "9" },
  { label: "구역9", value: "10" },
  { label: "구역10", value: "11" },
];

export function SettingInfoForm() {
  const [selectValue, setSelectValue] = useState<string>();

  return (
    <View style={{ gap: 112, width: 344 }}>
      <View style={{ gap: 24 }}>
        <TabletName />
        <Select
          value={selectValue}
          onSelect={setSelectValue}
          placeholder="선택해주세요."
          label="구역 설정"
          options={OPTIONS}
        />
      </View>
      <ButtonBox disabled={!selectValue} />
    </View>
  );
}
