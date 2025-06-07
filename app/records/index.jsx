import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ScreenWrapper from "../../shared/ScreenWrapper";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { Image } from "react-native";
import styles from "./styles";
const recordsData = [
  {
    id: "1",
    title: "Tomography scan report",
    type: "Scan report",
    date: "27/03/2024",
  },
  {
    id: "2",
    title: "Prescription @Jones clinic",
    type: "Prescription",
    date: "27/03/2024",
  },
  {
    id: "3",
    title: "Covid 19 vaccine-1, Covishield...",
    type: "Vaccine certificate",
    date: "27/03/2024",
  },
  {
    id: "4",
    title: "HDFC health insurance",
    type: "Insurance",
    date: "27/03/2024",
  },
  {
    id: "5",
    title: "Jones clinic discharge summary",
    type: "Discharge summary",
    date: "27/03/2024",
  },
  { id: "6", title: "Blood test", type: "Lab test", date: "27/03/2024" },
  { id: "7", title: "Blood test", type: "Lab test", date: "27/03/2024" },
  { id: "8", title: "Blood test", type: "Lab test", date: "27/03/2024" },
  { id: "9", title: "Blood test", type: "Lab test", date: "27/03/2024" },
];

const RecordsScreen = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (router.query?.newRecord) {
      const newRecord = JSON.parse(router.query?.newRecord);
      setRecords((prevRecords) => [newRecord, ...prevRecords]);
    }
  }, [router.query?.newRecord]);

  const filteredRecords = records.filter((record) =>
    record.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Camera access is required to take a photo.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      console.log("Camera Result:", result);

      router.push({
        pathname: "add-record",
        params: { imageUri: result.assets[0].uri },
      });
    }

    setModalVisible(false);
  };

  const openGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Gallery access is required to select a photo.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      console.log("Gallery Result:", result);

      router.push({
        pathname: "add-record",
        params: { imageUri: result.assets[0].uri },
      });
    }

    setModalVisible(false);
  };

  const openFiles = async () => {
    const result = await DocumentPicker.getDocumentAsync();

    if (result.type !== "cancel") {
      console.log("File Selected:", result);

      router.push({
        pathname: "add-record",
        params: { fileUri: result.uri },
      });
    }

    setModalVisible(false);
  };
  const actions = [
    {
      icon: <MaterialIcons name="devices" size={30} color="#000" />,
      label: "Device",
      onPress: () => {
        console.log("Device action triggered");
        setModalVisible(false);
      },
    },
    {
      icon: <MaterialIcons name="photo-library" size={30} color="#000" />,
      label: "Gallery",
      onPress: openGallery,
    },
    {
      icon: <Ionicons name="document" size={30} color="#000" />,
      label: "Files",
      onPress: openFiles,
    },
    {
      icon: <MaterialIcons name="camera-alt" size={30} color="#000" />,
      label: "Camera",
      onPress: openCamera,
    },
  ];
  const renderRecordItem = ({ item }) => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.recordCard}>
        <View style={styles.recordInfo}>
          <Ionicons name="document-text-outline" size={24} color="#4F4F4F" />
          <View style={styles.recordText}>
            <Text
              style={styles.recordTitle}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.title}
            </Text>
            <Text style={styles.recordSubtitle}>
              {item.type} • {item.date}
            </Text>
          </View>
        </View>
        <View style={styles.recordActions}>
          <TouchableOpacity>
            <Feather name="download" size={20} color="#4F4F4F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <Feather name="link" size={20} color="#4F4F4F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <Feather name="trash-2" size={20} color="#FF4D4D" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Records</Text>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#BDBDBD" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search records"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity>
            <Ionicons name="filter" size={20} color="#4F4F4F" />
          </TouchableOpacity>
        </View>

        {filteredRecords.length === 0 ? (
          <View style={styles.emptyState}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dx0ll70so/image/upload/v1749208344/pescription_xwfzus.png",
              }}
              resizeMode="contain"
              style={styles.placeholderImage}
            />
            <Text style={styles.noRecordsText}>No records</Text>
          </View>
        ) : (
          <FlatList
            data={filteredRecords}
            keyExtractor={(item) => item.id}
            renderItem={renderRecordItem}
            contentContainerStyle={styles.listContainer}
          />
        )}

        <TouchableOpacity
          style={styles.fab}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Choose action</Text>
                  <View style={styles.actionsRow}>
                    {actions.map((action, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.actionButton}
                        onPress={action.onPress}
                      >
                        {action.icon}
                        <Text style={styles.actionText}>{action.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </ScreenWrapper>
  );
};

export default RecordsScreen;
