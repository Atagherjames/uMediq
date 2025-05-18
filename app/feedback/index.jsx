import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "./styles";
import StarRating from "react-native-star-rating-widget";
const Index = () => {
  const [inputText, setInputText] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
  };
  const router = useRouter();
  const handleClear = () => {
    setInputText("");
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Give a Feedback</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Jane Doe</Text>
        </View>
        <Text style={styles.ratingPrompt}>
          Rate our App based on your experience.
        </Text>
        <StarRating
          rating={rating}
          onChange={setRating}
          starSize={30}
          color="#000"
        />
        {rating > 0 && (
          <Text style={styles.ratingFeedback}>
            {rating === 3 ? "Okay" : rating > 3 ? "Good" : "Needs Improvement"}
          </Text>
        )}

        <Text style={styles.title}>
          Let us know your likes and dislikes of the app
        </Text>
        <Text style={styles.subText}>Help us improve your experience</Text>

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
