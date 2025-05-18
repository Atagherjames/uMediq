import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Button from "../../shared/Button";
import styles from "./styles";
 
const Index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Patient visit, 27 July, 2024</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Vitals</Text>
          <Text style={styles.sectionText}>
            Pulserate - 80/min, Temperature - 101 F
          </Text>

          <Text style={styles.sectionTitle}>Symptoms</Text>
          <Text style={styles.sectionText}>Fever</Text>

          <Text style={styles.sectionTitle}>Diagnosis</Text>
          <Text style={styles.sectionText}>Dengue</Text>

          <Text style={styles.sectionTitle}>Medications</Text>
          <Text style={styles.sectionText}>Med 1</Text>
          <Text style={styles.sectionText}>Med 2</Text>
          <Text style={styles.sectionText}>Med 3</Text>
        </View>
        <Button
          title={"Add more records"}
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => router.push("records")}
        />
      </View>
    </ScreenWrapper>
  );
};



export default Index;
