import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  Linking,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import ScreenWrapper from "../../shared/ScreenWrapper";
import * as Clipboard from "expo-clipboard";
import styles from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay";
import { useLogout } from "../../features/user/userQeuries";
import { menuData } from "../../data/datas";

const showErrorToast = (message) => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: "rgba(255, 76, 76, 0.95)",
    textColor: "#fff",
    containerStyle: {
      borderRadius: 12,
      padding: 16,
      marginHorizontal: 30,
      elevation: 10,
    },
    textStyle: {
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
  });
};

const Index = () => {
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const router = useRouter();

  const { mutate: Logout, isPending: isLogoutPending } = useLogout(
    () => {
      router.replace("onboard");
    },

    (error) => showErrorToast(`Logout failed: ${error.message}`)
  );

  console.log(isLogoutPending);

  const shareLink = "https://example.com/user-profile";

  const handleCopy = (text) => {
    Clipboard.setStringAsync(text);
    alert("Copied to clipboard!");
  };

  const handleLogoutPress = () => setLogoutModalVisible(true);

  const confirmLogout = () => {
    setLogoutModalVisible(false);
    Logout();
  };

  const handleCopyLink = () => {
    Clipboard.setStringAsync(shareLink);
    alert("Link copied to clipboard!");
    setShareModalVisible(false);
  };

  const handleShare = (platform) => {
    let url = "";
    switch (platform) {
      case "whatsapp":
        url = `whatsapp://send?text=${encodeURIComponent(shareLink)}`;
        break;
      case "gmail":
        url = `mailto:?subject=Check this out&body=${encodeURIComponent(
          shareLink
        )}`;
        break;
      case "messages":
        url = `sms:?body=${encodeURIComponent(shareLink)}`;
        break;
      default:
        return;
    }
    Linking.openURL(url).catch(() => alert("Unable to open the app."));
    setShareModalVisible(false);
  };

  return (
    <ScreenWrapper>
      <Spinner
        visible={isLogoutPending}
        color="#4F75C1"
        overlayColor="rgba(0, 0, 0, 0.6)"
        textStyle={{ color: "#fff", fontWeight: "500" }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={[styles.headerTitle, { marginLeft: 8 }]}>
              User Profile Settings
            </Text>
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setShareModalVisible(true)}
            >
              <MaterialCommunityIcons
                name="share-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("edit-profile")}
            >
              <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Difference</Text>
              <Text style={styles.profileDetails}>Male, 10 yrs</Text>
            </View>
          </View>

          <View style={styles.profileInfo}>
            <View style={styles.profileRow}>
              <View style={styles.textContent}>
                <Text style={styles.profileDetails}>
                  <Text style={styles.label}> Mobile:</Text>
                  +91 8236542546
                </Text>
                <Text style={styles.label}>Email Address:</Text>
                <View style={styles.copyRow}>
                  <TouchableOpacity
                    onPress={() => handleCopy("admin@gmail.com")}
                  >
                    <Ionicons name="copy-outline" size={18} color="#555" />
                  </TouchableOpacity>
                  <Text style={styles.profileDetails}>Janedoe4251@abdm</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.profileActions}>
            <TouchableOpacity
              onPress={() => router.push("edit-profile")}
              style={[styles.actionButton, styles.verifyButton]}
            >
              <Text style={styles.verifyText}>Complete Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          {menuData.map((section, index) => (
            <View key={index}>
              <Text style={styles.sectionLabel}>{section.sectionLabel}</Text>
              <View style={styles.menuBox}>
                {section.items.map((item, itemIndex) => (
                  <TouchableOpacity
                    key={itemIndex}
                    style={styles.menuItem}
                    onPress={() =>
                      item.route === "logout"
                        ? handleLogoutPress()
                        : router.push(item.route)
                    }
                  >
                    <Text style={styles.menuText}>{item.title}</Text>
                    <Ionicons name="chevron-forward" size={20} color="black" />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.footerText}>
          &copy; 2025 uMediq. All rights reserved.
        </Text>

        {/* Logout Modal */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={logoutModalVisible}
        >
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setLogoutModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.logoutTitle}>Confirm Logout</Text>
              <Text style={styles.logoutMessage}>
                Are you sure you want to log out?
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setLogoutModalVisible(false)}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={confirmLogout}
                >
                  <Text style={styles.confirmText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </Modal>

        {/* Share Modal */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={shareModalVisible}
        >
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setShareModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.shareOptionsContainer}>
                <TouchableOpacity
                  style={styles.shareButton}
                  onPress={() => handleShare("whatsapp")}
                >
                  <Text style={styles.shareText}>Share via WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shareButton}
                  onPress={() => handleShare("gmail")}
                >
                  <Text style={styles.shareText}>Share via Email</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shareButton}
                  onPress={() => handleShare("messages")}
                >
                  <Text style={styles.shareText}>Share via SMS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shareButton}
                  onPress={handleCopyLink}
                >
                  <Text style={styles.shareText}>Copy Link</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </Modal>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Index;
