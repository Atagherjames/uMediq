import { Tabs } from "expo-router";
import { View, Dimensions, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabBarBackground from "@/components/TabBarBackground";

const { width } = Dimensions.get("window");

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "transparent",
            borderTopWidth: 0,
            elevation: 0,
            height: 65,
          },
          tabBarItemStyle: {
            marginTop: Platform.OS === "ios" ? 12 : 10,
          },
          tabBarBackground: () => <TabBarBackground />,
        }}
      >
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon name="chatbubble-ellipses-outline" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="appointments"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon name="calendar-outline" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  position: "absolute",
                  top: -25,
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: "#FFFFFF",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 999,
                  shadowColor: "#2563EB",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 6,
                  elevation: 10,
                }}
              >
                <Ionicons
                  name="home"
                  size={24}
                  color={focused ? "#2563EB" : "#A0A0A0"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon name="notifications-outline" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon name="person-outline" focused={focused} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

function TabIcon({
  name,
  focused,
}: {
  name: keyof typeof Ionicons.glyphMap;
  focused: boolean;
}) {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: focused ? "#E6F0FF" : "transparent",
        borderRadius: 25,
      }}
    >
      <Ionicons name={name} size={24} color={focused ? "#2563EB" : "#A0A0A0"} />
    </View>
  );
}
