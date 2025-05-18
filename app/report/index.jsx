import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import styles from "./styles";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const Index = () => {
  const [inputText, setInputText] = useState("");
  const router = useRouter();
  const handleClear = () => {
    setInputText("");
  };

  const handleSubmit = () => {
    console.log("Submitted:", inputText);
    setInputText("");
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report an issue</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }} // Placeholder profile image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Jane Doe</Text>
        </View>

        <Text style={styles.title}>Found a bug or an issue to report?</Text>
        <Text style={styles.subText}>
          You can attach a link of screenshot or video. You can also upload a
          pdf or image of size up to 5mb.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Describe the issue..."
            placeholderTextColor="#999"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity style={styles.attachmentIcon}>
            <Text style={{ fontSize: 20 }}>📎</Text>
          </TouchableOpacity>
        </View>

        {inputText.length > 0 && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default Index;
