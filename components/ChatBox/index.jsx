import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const ChatBox = ({ visible, onClose }) => {
  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };

  const [messages, setMessages] = useState([
    {
      id: "1",
      from: "doctor",
      text: "Hello! How are you feeling today?",
      timestamp: Date.now() - 1000 * 60 * 5,
    },
    {
      id: "2",
      from: "patient",
      text: "Hi Doc! Feeling a bit better, thanks.",
      timestamp: Date.now() - 1000 * 60 * 4,
    },
    {
      id: "3",
      from: "doctor",
      image: "https://placekitten.com/200/200",
      timestamp: Date.now() - 1000 * 60 * 3,
    },
  ]);

  const [input, setInput] = useState("");
  const flatListRef = useRef();

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim().length === 0) return;
    const newMessage = {
      id: Date.now().toString(),
      from: "patient",
      text: input.trim(),
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });

      if (!result.canceled && result.assets.length > 0) {
        const newMessage = {
          id: Date.now().toString(),
          from: "patient",
          image: result.assets[0].uri,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, newMessage]);
      }
    } catch (error) {
      Alert.alert("Error picking image", error.message);
    }
  };

  const onLongPressImage = (uri) => {
    Alert.alert("Download Image", `You can implement download for:\n${uri}`);
  };

  const renderItem = ({ item }) => {
    const isDoctor = item.from === "doctor";
    const time = item.timestamp ? formatTime(item.timestamp) : null;

    return (
      <View
        style={[
          styles.messageContainer,
          isDoctor ? styles.doctorMsg : styles.patientMsg,
        ]}
      >
        {item.text ? (
          <Text style={styles.messageText}>{item.text}</Text>
        ) : (
          <TouchableOpacity
            onLongPress={() => onLongPressImage(item.image)}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.image }} style={styles.chatImage} />
            <Text style={styles.imageHint}>Long press to download</Text>
          </TouchableOpacity>
        )}
        {time && <Text style={styles.timestamp}>{time}</Text>}
      </View>
    );
  };

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlayBackground} />
      </TouchableWithoutFeedback>

      <View style={styles.chatBoxContainer}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ ios: "padding", android: undefined })}
          keyboardVerticalOffset={90}
        >
          <View style={styles.chatHeader}>
            <Text style={styles.chatTitle}>Chat</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#111" />
            </TouchableOpacity>
          </View>

          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.messagesList}
          />

          <View style={styles.inputRow}>
            <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
              <Ionicons name="camera" size={20} color="#fff" />
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder="Type a message"
              placeholderTextColor="#555"
              multiline
            />

            <TouchableOpacity onPress={sendMessage} style={styles.iconButton}>
              <Ionicons name="send" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default ChatBox;
