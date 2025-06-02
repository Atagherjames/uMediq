import { useEffect } from "react";
import { Image, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

export default function AnimatedSplashScreen() {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient colors={["#FFFFFF", "#4A90E2"]} style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity }]}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
        />
      </Animated.View>
    </LinearGradient>
  );
}
