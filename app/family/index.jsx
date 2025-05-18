import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { useRouter } from "expo-router";
import IconHeader from "../../shared/IconHeader/IconHeader";
// import { getFamilyMembers } from "../../Redux/actions/authActions";

const Index = ({ navigation }) => {
  const router = useRouter();

  // useEffect(() => {
  //   getFamilyMembers();
  // }, []);

  return (
    <ScreenWrapper>
      <IconHeader
        title={"Family Members"}
        iconSize={24}
        onBackPress={() => router.back()}
      />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>CURRENT PROFILES</Text>

        <View style={styles.profileCard}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Jane Doe</Text>
            <Text style={styles.profileDetails}>Female, 33 yrs</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Main user</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("/add-family")}
        >
          <Text style={styles.addButtonText}>Add Member</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Index;
