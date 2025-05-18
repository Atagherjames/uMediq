import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { CustomCheckBox } from "../../shared/CustomCheckBox";
import ScreenWrapper from "../../shared/ScreenWrapper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Button from "../../shared/Button";
import { useRouter } from "expo-router/build";
import { categories } from "../../data/datas";
import styles from "./styles";
const Index = () => {
  const [images, setImages] = useState([]);
  const [fileName, setFileName] = useState("");
  const [recordCategory, setRecordCategory] = useState("Select a Category");
  const [linkRecord, setLinkRecord] = useState(true);
  const [addButtonEnabled, setAddButtonEnabled] = useState(true);
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [records, setRecords] = useState([]);
  const router = useRouter();

  const addMoreImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, { uri: result.assets[0].uri }]);
    }
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setDatePickerVisibility(false);
  };

  const addRecord = () => {
    const newRecord = {
      id: new Date().toISOString(),
      title: fileName,
      type: recordCategory,
      date: formatDate(selectedDate),
    };
    setRecords([newRecord, ...records]);
    setFileName("");
    setRecordCategory("Select a Category");
    setImages([]);
    setLinkRecord(true);
    setAddButtonEnabled(true);

    router.push({
      pathname: "/records",
      query: { newRecord: JSON.stringify(newRecord) },
    });
  };
  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Button
          title={<Ionicons name="arrow-back" size={24} color="#000" />}
          onPress={() => router.back()}
        />
        <Text style={styles.headerTitle}>Records</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imagesContainer}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image.uri }}
              style={styles.imagePreview}
            />
          ))}
          <Button
            style={styles.addImageCard}
            title={"Add more images"}
            icon2={"add-circle"}
            color="#00DEC4"
            size={50}
            onPress={addMoreImages}
          />
        </View>

        <Text style={styles.label}>File Name</Text>
        <TextInput
          style={styles.input}
          placeholder="File Name"
          value={fileName}
          onChangeText={setFileName}
        />

        <Text style={styles.label}>Record Category</Text>
        <Button
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          title={recordCategory}
          icon={"chevron-down"}
          color="#000"
          size={20}
          onPress={() => setCategoryModalVisible(true)}
        />
        <Text style={styles.label}>Date</Text>
        <Button
          style={styles.input}
          textStyle={{ color: "#000" }}
          title={formatDate(selectedDate)}
          onPress={() => setDatePickerVisibility(true)}
        />
        <View style={styles.checkboxContainer}>
          <CustomCheckBox value={linkRecord} onValueChange={setLinkRecord} />
          <Text style={styles.checkboxLabel}>Link record to Janedoe@abdm</Text>
        </View>
        <Button
          style={[
            styles.addRecordButton,
            { backgroundColor: addButtonEnabled ? "#00DEC4" : "#ccc" },
          ]}
          textStyle={styles.addRecordButtonText}
          title={"Add Record"}
          disabled={!addButtonEnabled}
          onPress={addRecord}
        />
        <Modal
          visible={isCategoryModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select a Category</Text>
              <ScrollView>
                {categories.map((item) => (
                  <Button
                    key={item.id}
                    style={styles.categoryItem}
                    textStyle={styles.categoryText}
                    onPress={() => {
                      setRecordCategory(item.label);
                      setCategoryModalVisible(false);
                    }}
                    iconStyle={styles.categoryIcon}
                    icon2={item.icon}
                    color={"#000000"}
                    size={18}
                    title={item.label}
                  />
                ))}
              </ScrollView>
              <TouchableOpacity
                onPress={() => setCategoryModalVisible(false)}
                style={styles.closeModalButton}
              >
                <Text style={styles.closeModalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisibility(false)}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Index;


