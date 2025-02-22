import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "constants/colors";
import { Tabs } from "expo-router";
import { View } from "react-native";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: COLORS.cardBackground,
              borderTopWidth: 1,
              borderTopColor: COLORS.border,
              height: 60 + insets.bottom,
              paddingBottom: insets.bottom,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.textSecondary,
            tabBarLabelStyle: {
              fontSize: 12,
              marginBottom: 4,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons name="home" size={24} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="energy-mix"
            options={{
              tabBarLabel: "Energy mix",
              tabBarIcon: ({ focused, color }) => (
                <MaterialIcons
                  name="energy-savings-leaf"
                  size={24}
                  color={color}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="tariff"
            options={{
              tabBarLabel: "Tariff outlook",
              tabBarIcon: ({ focused, color }) => (
                <MaterialIcons name="euro" size={24} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="menu"
            options={{
              tabBarLabel: "Menu",
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons name="menu" size={24} color={color} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </View>
  );
}
