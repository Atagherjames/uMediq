import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={[styles.headerTitle, { marginLeft: 8 }]}>Consult</Text>
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setShareModalVisible(true)}
            ></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Index;
