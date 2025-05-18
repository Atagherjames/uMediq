import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import ScreenWrapper from "../../shared/ScreenWrapper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import IconHeader from "../../shared/IconHeader/IconHeader";
import Octicons from "@expo/vector-icons/Octicons";
import { useRouter } from "expo-router";

const ScanToShareScreen = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <ScreenWrapper>
      <IconHeader
        title={"Scan to share"}
        iconSize={24}
        onBackPress={() => router.back()}
      />
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Hospital/clinic</Text>
          <Text style={styles.value}>Jones Clinic</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>Hyderabad</Text>
        </View>
        <View style={[styles.infoContainer, styles.borderBottom]}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>Today, 04:15 pm - 04:45 pm</Text>
        </View>
        <Text style={styles.label}>Your details</Text>
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <Avatar.Image
              size={50}
              source={{
                uri: "https://randomuser.me/api/portraits/women/1.jpg",
              }}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Jane Doe</Text>
            </View>
            <AntDesign name="swap" size={24} color="black" />
          </View>
          <View style={styles.details}>
            <View style={styles.infoContainer}>
              <View style={styles.iconTextRow}>
                <Ionicons name="person" size={20} color="#D2D2D2" />
                <Text style={styles.value}>Female, 30 yrs</Text>
              </View>
              <View style={styles.iconTextRow}>
                <FontAwesome name="birthday-cake" size={20} color="#D2D2D2" />
                <Text style={styles.value}>01 July 1995</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.iconTextRow}>
                <FontAwesome name="phone" size={20} color="#D2D2D2" />
                <Text style={styles.value}>+91 823654 2546</Text>
              </View>
              <View style={styles.iconTextRow}>
                <Ionicons name="location-sharp" size={20} color="#D2D2D2" />
                <Text style={styles.value}>CKP road, Hyderabad 5423215</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.iconTextRow}>
                <MaterialIcons name="email" size={20} color="#D2D2D2" />
                <Text style={styles.value}>janedoe@abdm</Text>
              </View>
              <View style={styles.iconTextRow}>
                <Octicons name="dot-fill" size={20} color="#D2D2D2" />
                <Text style={styles.value}>56-2632-5632-2365</Text>
              </View>
            </View>
          </View>
        </Card>
        <Text style={styles.noteTitle}>Note :</Text>
        <Text style={styles.noteText}>
          • You consent to the above information to be shared with Jones clinic.
        </Text>
        <Text style={styles.noteText}>
          • They can use this information for your registration and linking your
          health records.
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={()=> router.push('home')} mode="outlined" style={styles.cancelButton}>
            Cancel
          </Button>
          <Button
            mode="contained"
            style={styles.shareButton}
            onPress={showModal}
          >
            Share
          </Button>
        </View>

        {/* Modal for Success Message */}
        <Modal
          visible={visible}
          transparent
          animationType="slide"
          onRequestClose={hideModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <AntDesign name="checkcircle" size={40} color="#00DEC4" />
              {/* <Text style={styles.modalTitle}>Successfully shared</Text> */}
              <Text style={styles.modalText}>
                Successfully shared your details with Jones clinic.
              </Text>
              <Text style={styles.modalText}>Your token number is 56.</Text>
              <Pressable style={styles.okButton} onPress={hideModal}>
                <Text style={styles.okButtonText}>Okay</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    fontWeight: "400",
  },
  card: {
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: "#fff",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  details: {
    marginTop: 10,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 20,
  },
  noteTitle: {
    fontWeight: "bold",
    marginTop: 20,
  },
  noteText: {
    fontSize: 14,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    marginRight: 5,
    borderColor: "#ccc",
  },
  shareButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: "#00DEC4",
  },
  iconTextRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginVertical: 10,
  },
  modalText: {
    textAlign: "center",
    fontSize: 14,
    marginVertical: 5,
    color: "#555",
  },
  okButton: {
    marginTop: 15,
    backgroundColor: "#00DEC4",
    paddingVertical: 12,
    paddingHorizontal: 45,
    borderRadius: 5,
  },
  okButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ScanToShareScreen;
