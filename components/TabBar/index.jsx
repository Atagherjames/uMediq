import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router/build";
import styles from "./styles";

const TabBar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { name: "home", icon: "home-outline", label: "Home" },
    { name: "consult", icon: "medkit-outline", label: "Consult" },
    { name: "records", icon: "document-text-outline", label: "Records" },
    { name: "profile", icon: "person-outline", label: "Profile" },
  ];

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    router.push(tabName);
  };

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => handleTabPress(tab.name)}
          style={[
            styles.tabItem,
            activeTab === tab.name && styles.activeTabItem,
          ]}
        >
          <Ionicons
            name={tab.icon}
            size={24}
            color={activeTab === tab.name ? "#4F75C1" : "#000"}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === tab.name && styles.activeTabText,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabBar;
