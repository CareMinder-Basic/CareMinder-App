import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Pressable, View } from "react-native";
import { Text, useTheme, Chip } from "@rneui/themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { ROUTES } from "@/constants/route";

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        header: () => {
          return (
            <View
              style={{
                alignItems: "center",
                backgroundColor: theme.colors["#FFFFFF"],
                flexDirection: "row",
                height: 76,
                justifyContent: "space-between",
                paddingLeft: 20,
                top: insets.top,
                width: "100%",
              }}
            >
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Image
                  style={{ height: 43.5, width: 48.72 }}
                  source={require("@/assets/images/logo.jpg")}
                />
                <Image
                  style={{ height: 45, width: 240 }}
                  source={require("@/assets/images/ajou-university-hospital.jpg")}
                />
                <Image
                  style={{ height: 30, width: 240 }}
                  source={require("@/assets/images/ajou-university-hospital-en.jpg")}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 15 }}>
                <Chip
                  title="대기 1"
                  font="Pretendard_600"
                  buttonStyle={{
                    backgroundColor: "rgba(48, 180, 255, 0.1)",
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                  }}
                  titleStyle={{
                    color: theme.colors["#30B4FF"],
                    fontFamily: "Pretendard_600",
                  }}
                />
                <Chip
                  title="진행중 1"
                  font="Pretendard_600"
                  buttonStyle={{
                    backgroundColor: "rgba(242, 70, 121, 0.1)",
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                  }}
                  titleStyle={{
                    color: theme.colors["#F24679"],
                    fontFamily: "Pretendard_600",
                  }}
                />
                <Chip
                  title="완료 1"
                  font="Pretendard_600"
                  buttonStyle={{
                    backgroundColor: "rgba(239, 241, 249, 1)",
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                  }}
                  titleStyle={{
                    color: theme.colors["#5E5F65"],
                    fontFamily: "Pretendard_600",
                  }}
                />
              </View>
            </View>
          );
        },
      }}
      tabBar={({ navigation, state }) => {
        return (
          <View
            style={{
              backgroundColor: theme.colors["#FFFFFF"],
              flexDirection: "row",
              height: "100%",
              left: 0,
              position: "absolute",
              top: 76 + insets.top,
              width: 92,
            }}
          >
            <View
              style={{
                alignItems: "center",
                flex: 1,
                gap: 22,
                height: "100%",
                top: insets.top,
              }}
            >
              {state.routes.map(({ name, key }, index) => {
                const isCurrentRoute = state.index === index;

                return (
                  <Pressable
                    key={key}
                    style={{
                      width: "100%",
                    }}
                    onPress={() => {
                      navigation.navigate({
                        key,
                        name,
                      });
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      {ROUTES[name as keyof typeof ROUTES]?.image({
                        color: isCurrentRoute ? "#5D6DBE" : "#C4C5CC",
                      })}
                      <Text
                        color={isCurrentRoute ? "#5D6DBE" : "#C4C5CC"}
                        font="Pretendard_600"
                      >
                        {ROUTES[name as keyof typeof ROUTES]?.name}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        );
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="request-details"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
          title: "Request Details",
        }}
      />
      <Tabs.Screen
        name="request/recording/index"
        options={{
          title: "request-recording",
        }}
      />
      <Tabs.Screen
        name="request/complete/index"
        options={{
          title: "request-complete",
        }}
      />
    </Tabs>
  );
}
