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
import { useSearchParams } from "expo-router/build/hooks";
import { TextInput } from "react-native";
import styles from "./styles";

const Index = ({ route }) => {
  const router = useRouter();
  const { id, name } = useSearchParams();
  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Patient visit, 27 July, 2024</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter Patient ID" />
        <Text style={styles.label}>Selected Healthcare Program </Text>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>eSanjeevani - HWC</Text>
          <Text style={styles.sectionText}>HIP NO: hied02</Text>
        </View>
        <Text style={styles.label}>Profile </Text>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Name</Text>
          <Text style={styles.sectionText}>Kelvin Anyigor</Text>

          <Text style={styles.sectionTitle}>ABHA Address</Text>
          <Text style={styles.sectionText}>JaneDoe12@abdm</Text>

          <Text style={styles.sectionTitle}>Gender</Text>
          <Text style={styles.sectionText}>Female</Text>
          <Text style={styles.sectionTitle}>Date of Birth</Text>
          <Text style={styles.sectionText}>23/09/1978</Text>
        </View>

        <Button
          title={"Fetch Records"}
          style={styles.button}
          textStyle={styles.buttonText}
          // onPress={() => router.push("records")}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Index;
