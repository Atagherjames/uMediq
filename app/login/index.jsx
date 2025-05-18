import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ScreenWrapper from "../../shared/ScreenWrapper";
import styles from "./styles";

const Index = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (login) {
      router.push("otp");
      setLogin(false);
    }
  }, [login]);

  return (
    <ScreenWrapper>
      <LinearGradient
        colors={["#ffffff", "#BFDFFF7A", "#ffffff"]}
        style={styles.header}
      >
        <Image
          source={require("../../assets/images/uMediq .png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </LinearGradient>

      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Text style={styles.welcomeText}>Welcome to uMediq</Text>
        </View>

        <View style={styles.loginContainer}>
          {/* Email or Phone Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                focusedInput === "email" && styles.inputFocused,
              ]}
              placeholder="Email or Phone Number"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              placeholderTextColor="#666"
            />
          </View>

          {/* Password Input with Toggle */}
          <View style={styles.inputContainer}>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={[
                  styles.input,
                  styles.passwordInput,
                  focusedInput === "password" && styles.inputFocused,
                ]}
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setFocusedInput("password")}
                onBlur={() => setFocusedInput(null)}
                placeholderTextColor="#666"
              />
              <Pressable
                style={styles.eyeIcon}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Ionicons
                  name={passwordVisible ? "eye" : "eye-off"}
                  size={20}
                  color="#666"
                />
              </Pressable>
            </View>
          </View>

          {/* Login Button */}
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => setLogin(true)}>
              <Text style={styles.text1}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <View style={styles.forgotPassword}>
            <Text style={styles.text2}>I Forgot my Password</Text>
          </View>

          {/* Sign Up Prompt */}
          <View style={styles.signUp}>
            <Text style={styles.inputText}>
              Don't have a uMediq Account Yet?
            </Text>
            <Text style={styles.text2}>Click here to get one</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Index;
