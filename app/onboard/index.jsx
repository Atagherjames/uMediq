import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TypeWriter from "react-native-typewriter";
import { useRouter } from "expo-router";

import styles from "./style";

const backgroundConfigs = [
  { color: "#00695C", text: "uMediq", textColor: "#FDECF5" },
  { color: "#4A90E2", text: "Smart Health", textColor: "#ffffff" },
  { color: "#E0F7FA", text: "Doctor Connect", textColor: "#EC407A" },
];

const Index = () => {
  const route = useRouter();
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const blinkOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(blinkOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundConfigs.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const current = backgroundConfigs[index];

  const getBarStyle = (color) => {
    const darkColors = ["#00695C", "#283593"];
    return darkColors.includes(color) ? "light-content" : "dark-content";
  };

  return (
    <View style={{ flex: 1, backgroundColor: current.color }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={getBarStyle(current.color)}
      />
      <View style={{ height: insets.top, backgroundColor: current.color }} />

      <View
        style={[
          styles.container,
          { justifyContent: "center", paddingBottom: 60 },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypeWriter
            typing={1}
            minDelay={50}
            maxDelay={100}
            style={[
              styles.title,
              { color: current.textColor, textAlign: "center" },
            ]}
          >
            {current.text}
          </TypeWriter>

          <Animated.View
            style={[
              styles.dot,
              {
                backgroundColor: current.textColor,
                opacity: blinkOpacity,
                marginLeft: 6,
              },
            ]}
          />
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={[styles.button, styles.googleButton]}>
            <View style={styles.buttonContent}>
              <Ionicons name="logo-google" style={styles.googleIcon} />
              <Text style={[styles.buttonText, styles.googleButtonText]}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.darkButton]}>
            <Text style={[styles.buttonText, styles.darkButtonText]}>
              Sign up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.darkButton]}
            onPress={() => route.push("/login")}
          >
            <Text style={[styles.buttonText, styles.darkButtonText]}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;
