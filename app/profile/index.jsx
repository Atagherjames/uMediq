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
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import ScreenWrapper from "../../shared/ScreenWrapper";
import * as Clipboard from "expo-clipboard";
import styles from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { menuData } from "../../data/datas";
const Index = () => {
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const router = useRouter();
  const shareLink = "https://example.com/user-profile";
  const [showDetails, setShowDetails] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleSwitchProfile = () => {
    setModalVisible(true);
  };

  const handleCopy = (text) => {
    Clipboard.setStringAsync(text);
    alert("Copied to clipboard!");
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const selectProfile = (profileName) => {
    setSelectedProfile(profileName);
    setModalVisible(false);
  };
  const handleLogoutPress = () => setLogoutModalVisible(true);

  const confirmLogout = () => {
    setLogoutModalVisible(false);
    router.replace("/onboard");
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
              <Text style={styles.profileName}>Jane Doe</Text>
              {/* <Text style={styles.profileName}>
                ${selectedProfile.firstName}``${selectedProfile.lastName}`
              </Text> */}
              <Text style={styles.profileDetails}>Female, 30 yrs</Text>
              {/* <Text
                style={styles.profileDetails}
              >{`${selectedProfile.gender}, ${selectedProfile.age}`}</Text> */}
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
                    {/* <TouchableOpacity
                    onPress={() => handleCopy(selectedProfile.abhaId)}
                  >
                     */}
                    <Ionicons name="copy-outline" size={18} color="#555" />
                  </TouchableOpacity>

                  <Text style={styles.profileDetails}>
                    Janedoe4251@abdm
                    {/* {selectedProfile.abhaId} */}
                  </Text>
                </View>

                {showDetails && (
                  <>
                    <Text style={styles.label}>ABHA Number:</Text>
                    <View style={styles.copyRow}>
                      <TouchableOpacity
                        onPress={() => handleCopy("1234-5678-9012")}
                      >
                        <Ionicons name="copy-outline" size={18} color="#555" />
                      </TouchableOpacity>
                      <Text style={styles.profileDetails}>1234-5678-9012</Text>
                    </View>
                  </>
                )}
              </View>
              {showDetails && (
                <View style={styles.qrCodeWrapper}>
                  <QRCode value="1234-5678-9012" size={75} />
                </View>
              )}
            </View>
          </View>
          <View style={styles.profileActions}>
            {showDetails ? (
              <TouchableOpacity
                style={[styles.actionButton, styles.switchButton]}
                onPress={handleSwitchProfile}
              >
                <Text style={styles.switchText}>Switch Profile</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.actionButton, styles.switchButton]}
                onPress={handleSwitchProfile}
              >
                <Text style={styles.switchText}>Switch Profile</Text>
              </TouchableOpacity>
            )}

            {!showDetails && (
              <TouchableOpacity
                onPress={() => setShowDetails(true)}
                style={[styles.actionButton, styles.verifyButton]}
              >
                <Text style={styles.verifyText}>Verify KYC</Text>
              </TouchableOpacity>
            )}
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

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <Pressable style={styles.modalOverlay} onPress={closeModal}>
            <View style={styles.modalContainer}>
              {/* {profiles.map((profile, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.profileCardModal,
                    selectedProfile === profile.fullName && styles.mainUserCard,
                  ]}
                  onPress={() => selectProfile(profile)}
                >
                  <View style={styles.profileRow}>
                    <Image source={profile.image} style={styles.profileImage} />
                    <View style={styles.profileInfo}>
                      <Text style={styles.profileName}>{profile.fullName}</Text>
                      <Text style={styles.profileDetails}>
                        {profile.gender}, {profile.age} yrs
                      </Text>
                    </View>

                    <View
                      style={profile.isMain ? styles.tag : styles.tagSecondary}
                    >
                      <Text
                        style={
                          profile.isMain
                            ? styles.tagText
                            : styles.tagTextSecondary
                        }
                      >
                        {profile.relation}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))} */}
              <TouchableOpacity
                style={[
                  styles.profileCardModal,
                  selectedProfile === "Jane Doe" && styles.mainUserCard,
                ]}
                onPress={() => selectProfile("Jane Doe")}
              >
                <View style={styles.profileRow}>
                  <Image
                    source={require("../../assets/images/icon.png")}
                    style={styles.profileImage}
                  />
                  <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>Jane Doe</Text>
                    <Text style={styles.profileDetails}>Female, 30 yrs</Text>
                  </View>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>Main User</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.profileCardModal,
                  selectedProfile === "Max Doe" && styles.mainUserCard,
                ]}
                onPress={() => selectProfile("Max Doe")}
              >
                <View style={styles.profileRow}>
                  <Image
                    source={require("../../assets/images/icon.png")}
                    style={styles.profileImage}
                  />
                  <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>Max Doe</Text>
                    <Text style={styles.profileDetails}>Male, 63 yrs</Text>
                  </View>
                  <View style={styles.tagSecondary}>
                    <Text style={styles.tagTextSecondary}>Father</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
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
                  style={styles.shareOption}
                  onPress={handleCopyLink}
                >
                  <AntDesign name="link" size={24} color="black" />
                  <Text style={styles.optionText}>Copy Link</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shareOption}
                  onPress={() => handleShare("whatsapp")}
                >
                  <Ionicons name="logo-whatsapp" size={24} color="green" />
                  <Text style={styles.optionText}>WhatsApp</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shareOption}
                  onPress={() => handleShare("gmail")}
                >
                  <Ionicons name="mail-outline" size={24} color="red" />
                  <Text style={styles.optionText}>Gmail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.shareOption}
                  onPress={() => handleShare("messages")}
                >
                  <Ionicons name="chatbubble-outline" size={24} color="blue" />
                  <Text style={styles.optionText}>Messages</Text>
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
