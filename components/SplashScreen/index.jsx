import { useEffect, useState } from "react";
import { View, Text, Image, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TypeWriter from "react-native-typewriter";
import styles from "./styles";

export default function AnimatedSplashScreen() {
  const opacity = new Animated.Value(0);
  const [textVisible, setTextVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setTextVisible(true);
      setTimeout(() => {
        setSubtitleVisible(true);
      }, 1500);
    }, 1000);
  }, []);

  return (
    <LinearGradient colors={["#FFFFFF", "#4A90E2"]} style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity }]}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          {textVisible && (
            <TypeWriter style={styles.text} typing={1}>
              uMediq
            </TypeWriter>
          )}
          {subtitleVisible && (
            <Text style={styles.subtitle}>Your Health, Anytime, Anywhere</Text>
          )}
        </View>
      </Animated.View>
    </LinearGradient>
  );
}
