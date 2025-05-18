import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Linking,
  Alert,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { useRouter } from "expo-router";
import IconHeader from "../../shared/IconHeader/IconHeader";
const Index = () => {
  const router = useRouter();
  const [modalDeleteProfile, setModalDeleteProfile] = useState(false);
  const [modalDeleteAccount, setModalDeleteAccount] = useState(false);
  const openTermsAndConditions = async () => {
    const url = "https://www.healtether.com/terms";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "Unable to open the website.");
    }
  };

  const options = [
    {
      id: 1,
      title: "Privacy Policy",
      description: "View our privacy policy",
      action: () => router.push("privacy"),
    },
    {
      id: 2,
      title: "Delete Profile",
      description: "Delete Family members Profile",
      action: () => setModalDeleteProfile(true),
    },
    {
      id: 3,
      title: "Delete Account",
      description: "Delete your account along with family members Profile",
      action: () => setModalDeleteAccount(true),
    },
    {
      id: 4,
      title: "Terms and Conditions",
      description: "Read our terms and conditions",
      action: openTermsAndConditions,
    },
  ];

  return (
    <ScreenWrapper>
      <IconHeader
        title={"Security and Privacy"}
        iconSize={24}
        onBackPress={() => router.back()}
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.listContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionButton}
              onPress={option.action}
            >
              <Text style={styles.optionText}>{option.title}</Text>
              <Text style={styles.subText}>{option.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Modal visible={modalDeleteAccount} animationType="slide" transparent>
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setModalDeleteAccount(false)}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Delete Account</Text>
              <Text style={styles.modalDescription}>
                • All the data associated with the main user account will be
                deleted permanently.{"\n"}• All family members' profiles linked
                to the main user account will also be deleted.{"\n"}• Family
                members' ABHA profiles linked to the account will not be
                affected.
              </Text>
              <Text style={styles.sectionLabel}>
                The following profiles will be deleted permanently.
              </Text>
              <View style={styles.profileCard}>
                <Ionicons name="person-circle-outline" size={40} color="#000" />
                <View>
                  <Text style={styles.profileName}>Jane Doe</Text>
                  <Text style={styles.profileDetails}>Female, 30 yrs</Text>
                </View>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Main user</Text>
                </View>
              </View>
              <Text style={styles.sectionLabel}>Family Members Profiles</Text>
              <View style={styles.profileCard}>
                <Ionicons name="person-circle-outline" size={40} color="#000" />
                <View>
                  <Text style={styles.profileName}>Max Doe</Text>
                  <Text style={styles.profileDetails}>Male, 40 yrs</Text>
                </View>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Father</Text>
                </View>
              </View>
              <Text>Do you still want to delete the profile?</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalDeleteAccount(false)}
                >
                  <Text style={styles.cancelText}>No</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={() => {
                    setModalDeleteAccount(false);
                    console.log("Account deleted");
                  }}
                >
                  <Text style={styles.confirmText}>Yes, I agree</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </Modal>
        <Modal visible={modalDeleteProfile} animationType="slide" transparent>
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setModalDeleteProfile(false)}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Delete Profile</Text>
              <Text style={[styles.modalDescription, { marginBottom: 15 }]}>
                • All the data associated with the main user account will be
                deleted permanently.{"\n"}• All family members' profiles linked
                to the main user account will also be deleted.{"\n"}• Family
                members' ABHA profiles linked to the account will not be
                affected.
              </Text>

              <View style={styles.profileCard}>
                <Ionicons name="person-circle-outline" size={40} color="#000" />
                <View>
                  <Text style={styles.profileName}>Max Doe</Text>
                  <Text style={styles.profileDetails}>Male, 40 yrs</Text>
                </View>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Father</Text>
                </View>
              </View>
              <Text>Do you still want to delete the profile?</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalDeleteProfile(false)}
                >
                  <Text style={styles.cancelText}>No</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={() => {
                    setModalDeleteProfile(false);
                    console.log("Account deleted");
                  }}
                >
                  <Text style={styles.confirmText}>Yes, I agree</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </Modal>
      </View>
    </ScreenWrapper>
  );
};

export default Index;
