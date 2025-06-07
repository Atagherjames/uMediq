import { useState } from "react";
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
import Spinner from "react-native-loading-spinner-overlay";
import Toast from "react-native-root-toast";

import ScreenWrapper from "../../shared/ScreenWrapper";
import styles from "./styles";
import { useLogin } from "../../features/user/userQeuries";

const showErrorToast = (message) => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: true,
    backgroundColor: "rgba(255, 76, 76, 0.95)",
    textColor: "#fff",
    containerStyle: {
      borderRadius: 12,
      padding: 16,
      marginHorizontal: 30,
      elevation: 10,
    },
    textStyle: {
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
  });
};

const Index = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const { mutate: loginUser, isPending } = useLogin(
    () => router.replace("home"),
    (error) => showErrorToast(`Wrong Email or Password`)
  );

  return (
    <ScreenWrapper>
      <Spinner
        visible={isPending}
        color="#4F75C1"
        overlayColor="rgba(0, 0, 0, 0.6)"
        textStyle={{ color: "#fff", fontWeight: "500" }}
      />

      <LinearGradient
        colors={["#ffffff", "#BFDFFF7A", "#ffffff"]}
        style={styles.header}
      >
        <Image
          source={require("../../assets/images/icon.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </LinearGradient>

      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Text style={styles.welcomeText}>Welcome to uMediq</Text>
        </View>

        <View style={styles.loginContainer}>
          {/* Email */}
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                focusedInput === "email" && styles.inputFocused,
              ]}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              placeholderTextColor="#666"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
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
            <TouchableOpacity
              style={styles.btn}
              onPress={() => loginUser({ email, password })}
              disabled={isPending}
            >
              <Text style={styles.text1}>
                {isPending ? "Logging in..." : "Login"}
              </Text>
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
