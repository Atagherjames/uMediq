import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "./styles";

const ABHAScreen = () => {
  const [isAutoSyncEnabled, setIsAutoSyncEnabled] = useState(false);
  const router = useRouter();
  const toggleAutoSync = () =>
    setIsAutoSyncEnabled((previousState) => !previousState);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>ABHA </Text>
        </View>

        <View style={styles.optionContainer}>
          <View style={styles.row}>
            <Text style={styles.optionTitle}>Auto-Sync the new records</Text>
            <Switch
              trackColor={{ false: "#ddd", true: "#00C9A7" }}
              thumbColor={isAutoSyncEnabled ? "#ffffff" : "#f4f3f4"}
              onValueChange={toggleAutoSync}
              value={isAutoSyncEnabled}
            />
          </View>
          <Text style={styles.optionDescription}>
            When new health records are linked by your healthcare providers to
            your ABHA address, they will appear in HealTether app
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.push("consent-pin")}
        >
          <Text style={styles.buttonTitle}>Setup / Update Consent Pin</Text>
          <Text style={styles.buttonDescription}>
            Set or Change the consent pin to approve the access requested by
            healthcare providers
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default ABHAScreen;
