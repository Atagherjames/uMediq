import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CustomCheckBox } from "../../shared/CustomCheckBox";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "./styles";
 
const RequestDetails = () => {
  const router = useRouter()
  const [isLinked, setIsLinked] = useState({}); 
  const [healthcareProviderSelection, setHealthcareProviderSelection] =
    useState({}); 

  const toggleCheckbox = (key, group) => {
    if (group === "infoType") {
      setIsLinked((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    } else if (group === "healthcareProviders") {
      setHealthcareProviderSelection((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  const requestInfo = {
    doctor: "Dr. James",
    clinic: "ABC Clinic",
    type: "Consent",
    purpose: "Care management",
    requestedAt: "2:00 PM, 27 Jul 2024",
    rejectedOn: " 27 Jul 2024",
    duration: {
      from: "27 Dec 2023",
      to: "27 Jul 2024",
      expiresOn: "8:00 PM, 27 Jul 2025",
    },
    requestInformationType: [
      "Diagnostic Report",
      "Prescription",
      "Discharge Summary",
      "OP Consultation",
      "Immunization Record",
      "Wellness Record",
      "Health Document Record",
    ],
    healthcareProviders: ["All", "Patient visit"],
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rejected details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.doctor}>{requestInfo.doctor}</Text>
          <Text style={styles.clinic}>{requestInfo.clinic}</Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Type of request: </Text>
            {requestInfo.type}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Purpose of request: </Text>
            {requestInfo.purpose}
          </Text>
          <Text style={styles.detail}>
            <Text style={styles.label}>Requested at: </Text>
            {requestInfo.requestedAt}
          </Text>
          <Text style={[styles.detail, { color: "#E54E49" }]}>
            <Text style={styles.label}>Rejected-on: </Text>
            {requestInfo.rejectedOn}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Duration</Text>
          <View style={styles.duration}>
            <View>
              <Text style={styles.label}>From</Text>
              <Text style={styles.value}>{requestInfo.duration.from}</Text>
            </View>
            <View>
              <Text style={styles.label}>To</Text>
              <Text style={styles.value}>{requestInfo.duration.to}</Text>
            </View>
            <View>
              <Text style={styles.label}>Expires on</Text>
              <Text style={styles.value}>{requestInfo.duration.expiresOn}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Request Information Type</Text>
          {requestInfo.requestInformationType.map((item, index) => (
            <View key={index} style={styles.checkboxContainer}>
              <CustomCheckBox
                value={isLinked[item] || false}
                onValueChange={() => toggleCheckbox(item, "infoType")}
                color={isLinked[item] ? "#00C6A2" : undefined}
              />
              <Text style={styles.checkboxLabel}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Healthcare Providers</Text>
          <Text style={styles.subtext}>
            Sharing your data for the below healthcare providers
          </Text>
          {requestInfo.healthcareProviders.map((provider, index) => (
            <View key={index} style={styles.checkboxContainer}>
              <CustomCheckBox
                value={healthcareProviderSelection[provider] || false}
                onValueChange={() =>
                  toggleCheckbox(provider, "healthcareProviders")
                }
                color={
                  healthcareProviderSelection[provider] ? "#00C6A2" : undefined
                }
              />
              <Text style={styles.checkboxLabel}>{provider}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity style={styles.rejectButton}>
            <Text style={styles.rejectText}>Revoke Consent</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity style={styles.approveButton}>
            <Text style={styles.approveText}>Approve</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};



export default RequestDetails;
