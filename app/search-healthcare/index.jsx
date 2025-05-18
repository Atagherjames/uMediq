import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { useRouter } from "expo-router";
import styles from "./styles";
import IconHeader from "../../shared/IconHeader/IconHeader";

const SearchHealthcareProviders = () => {
  // const navigation = useNavigation();
  const router = useRouter();

  const healthcarePrograms = [
    { id: 1, name: "RCH MoHFW" },
    { id: 2, name: "eSanjeevaniOPD" },
    { id: 3, name: "eSanjeevani - HWC" },
    { id: 4, name: "eSanjeevani 2.0" },
    { id: 5, name: "Non Communicable Disease Program" },
    { id: 6, name: "CoWIN" },
    { id: 7, name: "AB - PMJAY" },
  ];

  const handleProgramClick = (program) => {
    router.push({
      pathname: "/discover-records",
      params: { id: program.id, name: program.name },
    });
  };
  return (
    <ScreenWrapper>
      <IconHeader
        title={"Search Healthcare Providers"}
        iconSize={24}
        onBackPress={() => router.back()}
      />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="gray"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search your Hospital, Clinic or Lab name"
            style={styles.searchInput}
          />
        </View>
        <Text style={styles.orText}>Or select from</Text>
        <Text style={styles.sectionTitle}>Government Programs</Text>
        <ScrollView contentContainerStyle={styles.listContainer}>
          {healthcarePrograms.map((program) => (
            <TouchableOpacity
              key={program.id}
              style={styles.programItem}
              onPress={() => handleProgramClick(program)}
            >
              <Text style={styles.programText}>{program.name}</Text>
              <Ionicons name="chevron-forward" size={20} color="gray" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default SearchHealthcareProviders;
