import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Pressable, View } from "react-native";
import { Text } from "@rneui/themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state }) => {
        return (
          <View
            style={{
              flexDirection: "row",
              height: "100%",
              left: 0,
              position: "absolute",
              top: 76,
            }}
          >
            <View
              style={{
                backgroundColor: "red",
                height: 76,
                position: "absolute",
                top: -76 + insets.top,
              }}
            >
              <Text color="#2A3779" font="Pretendard_900">
                etstestestetstestestetstestestetstestestetstestestetstestestetstestest
                etstestestetstestestetstestestetstestestetstestestetstestestetstestest
                etstestestetstestestetstestestetstestestetstestestetstestestetstestest
                etstestestetstestestetstestestetstestestetstestestetstestestetstestest
                etstestestetstestestetstestestetstestestetstestestetstestestetstestest
                etstestestetstestestetstestestetstestestetstestestetstestestetstestest
                etstestestetstestestetstestestetstestestetstestestetstestestetstestest
              </Text>
            </View>
            <View style={{ height: "100%", top: insets.top }}>
              {state.routes.map(({ name, key }) => (
                <Pressable
                  key={key}
                  onPress={() => {
                    navigation.navigate({
                      key,
                      name,
                    });
                  }}
                >
                  <Text color="#2A3779" font="Pretendard_900">
                    {name}
                  </Text>
                </Pressable>
              ))}
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
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
          title: "Explore",
        }}
      />
    </Tabs>
  );
}
