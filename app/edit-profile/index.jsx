import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons/build/Icons";
import { useRouter } from "expo-router/build";
import styles from "./styles";

const CreateProfileScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const router = useRouter();
  const isFormComplete = firstName && lastName && (age || birthDate) && gender;

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleNavigate = () => {
    if (isFormComplete) {
      router.push("home");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Edit your Profile</Text>

          <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            {profileImage ? (
              <Image style={styles.image} source={{ uri: profileImage }} />
            ) : (
              <View style={styles.placeholder}>
                <Ionicons name="camera-outline" size={40} color="#413D56" />
              </View>
            )}
            {!profileImage && (
              <Text style={styles.uploadText}>Tap to upload picture</Text>
            )}
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex - John"
              placeholderTextColor="#aaa"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex - Whittaker"
              placeholderTextColor="#aaa"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Age"
              placeholderTextColor="#aaa"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />
          </View>

          <Text style={styles.orText}>Or</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Birth Date</Text>
            <TextInput
              style={styles.input}
              placeholder="DD-MM-YYYY"
              placeholderTextColor="#aaa"
              value={birthDate}
              onChangeText={setBirthDate}
            />
          </View>

          <Text style={styles.label}>Your Gender</Text>
          <View style={styles.genderContainer}>
            {["Male", "Female", "Other"].map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.genderButton,
                  gender === option && styles.genderButtonSelected,
                ]}
                onPress={() => setGender(option)}
              >
                <Text
                  style={[
                    styles.genderText,
                    gender === option && styles.genderTextSelected,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.submitButton,
              isFormComplete && styles.submitButtonEnabled,
            ]}
            disabled={!isFormComplete}
            onPress={handleNavigate}
          >
            <Text style={styles.submitText}>
              {isFormComplete ? "Edit My Profile" : "Complete All Fields"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CreateProfileScreen;
