import React from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useRef } from "react";
import styles from "./styles";
import { useRouter } from "expo-router/build";
const ToastMessage = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const router = useRouter();
  useEffect(() => {
    const breathingAnimation = () => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => breathingAnimation());
    };

    breathingAnimation();
    const timer = setTimeout(() => {
      router.replace("home");
    }, 3000);

    return () => {
      scaleValue.stopAnimation();
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.iconContainer, { transform: [{ scale: scaleValue }] }]}
      >
        <Ionicons name="checkmark-circle-outline" size={100} color="#00C292" />
      </Animated.View>
      <Text style={styles.message}>Profile created successfully</Text>
    </View>
  );
};

export default ToastMessage;
