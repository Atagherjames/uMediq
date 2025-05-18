import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { useRouter } from "expo-router";
import IconHeader from "../../shared/IconHeader/IconHeader";
const Index = () => {
  const router = useRouter();
  const [modalUpdateKYC, setModalUpdateKYC] = useState(false);
  const [modalUnlinkABHA, setModalUnlinkABHA] = useState(false);

  const options = [
    {
      id: 1,
      title: "ABHA Consents",
      action: () => router.push("auto-sync"),
    },
    {
      id: 2,
      title: "Update KYC details",
      action: () => setModalUpdateKYC(true),
    },
    {
      id: 3,
      title: "Unlink ABHA from HealTether",
      action: () => setModalUnlinkABHA(true),
    },
  ];

  const kycOptions = [
    {
      id: 1,
      title: "Update Mobile number ",
      action: () => router.push("abha-mobile"),
    },
    {
      id: 2,
      title: "Update Email id",
      action: () => router.push("abha-email"),
    },
    {
      id: 3,
      title: "Update Address",
      action: () => router.push("abha-add"),
    },
  ];

  const handleKYCSelection = (action) => {
    action();
    setModalUpdateKYC(false);
  };

  return (
    <ScreenWrapper>
      <IconHeader
        title={"ABHA"}
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
              <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Modal visible={modalUpdateKYC} animationType="slide" transparent>
          <TouchableWithoutFeedback onPress={() => setModalUpdateKYC(false)}>
            <View style={styles.modalOverlay}>
              <View style={[styles.modalContainer, styles.modalWithShadow]}>
                {kycOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={styles.listItem}
                    onPress={() => handleKYCSelection(option.action)}
                  >
                    <Text style={styles.listText}>{option.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Modal
          visible={modalUnlinkABHA}
          animationType="fade"
          transparent
          onRequestClose={() => setModalUnlinkABHA(false)}
        >
          <TouchableWithoutFeedback style={styles.modalOverlay}>
            <View style={[styles.modalContainer, styles.unlinkModal]}>
              <Text style={styles.unlinkTitle}>Unlink ABHA</Text>
              <Text style={styles.unlinkDescription}>
                <Text style={{ fontWeight: "bold" }}>HealTether </Text>
                will stop showing linked records with ABHA. Do you want to
                unlink ABHA ID from HealTether?
              </Text>
              <Text style={styles.unlinkNote}>Note:</Text>
              <Text style={styles.unlinkDetails}>
                1. ABHA ID will be unlinked from HealTether but you will still
                be able to access it from other PHR apps.{"\n"}
                2. To delete ABHA ID, you should visit{" "}
                <Text style={{ color: "#007BFF" }}>phr.abdm.gov.in</Text>
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setModalUnlinkABHA(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.unlinkButton}
                  onPress={() => {
                    setModalUnlinkABHA(false);
                    router.push("abha");
                  }}
                >
                  <Text style={styles.unlinkButtonText}>Unlink Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </ScreenWrapper>
  );
};

export default Index;
