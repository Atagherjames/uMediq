import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { useRouter } from "expo-router";
import Button from "../../shared/Button";
const Index = () => {
  const router = useRouter();

  const options = [
    {
      id: 1,
      title: "ABC Clinic",
      description: "IN 12300045678",
      action: () => router.push("providers-card"),
    },
    {
      id: 2,
      title: " ABC Clinic",
      description: "IN 12300045678",
      action: () => router.push("providers-card"),
    },
    {
      id: 3,
      title: "App1",
      description: "",
      // action: () => setModalDeleteAccount(true),
    },
  ];

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Providers</Text>
        </View>
        <ScrollView contentContainerStyle={styles.listContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionButton}
              onPress={option.action}
            >
              <Text style={styles.optionText}>{option.title}</Text>
              {option.description ? (
                <Text style={styles.subText}>{option.description}</Text>
              ) : null}
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Button
          style={styles.fab}
          onPress={() => setModalVisible(true)}
          title={<Ionicons name="add" size={30} color="white" />}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Index;
