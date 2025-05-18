import { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import Button from "../../shared/Button";

import styles from "./styles";

const OTP_EXPIRY = 20;

const Index = () => {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef([]);

  // countdown state
  const [timer, setTimer] = useState(OTP_EXPIRY);
  const canResend = timer === 0;

  // Start / reset the countdown
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);
  const handleOtpChange = useCallback((text, idx) => {
    setOtp((o) => {
      const next = [...o];
      next[idx] = text;
      return next;
    });
    if (text && idx < otp.length - 1) {
      otpRefs.current[idx + 1]?.focus();
    }
  }, []);

  const handleVerify = useCallback(() => {
    router.replace("home");
    const code = otp.join("");
    if (code.length === 4) {
    }
  }, [otp]);

  const handleResendOtp = useCallback(() => {
    if (!canResend) return;
    setOtp(["", "", "", ""]);
    otpRefs.current[0]?.focus();

    // restart countdown
    setTimer(OTP_EXPIRY);
  }, [canResend]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Verify it's you</Text>
        {/* <Text style={styles.subtitle}>Enter OTP sent to {mobile}</Text> */}

        <View style={styles.otpContainer}>
          {otp.map((digit, idx) => (
            <TextInput
              key={idx}
              ref={(r) => (otpRefs.current[idx] = r)}
              value={digit}
              onChangeText={(t) => handleOtpChange(t, idx)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        {/* {error && <Text style={{ color: "red" }}>{error}</Text>} */}
        <Button
          title={canResend ? "Resend OTP" : `Resend in ${timer}s`}
          onPress={handleResendOtp}
          textStyle={styles.resendOtp}
          // disabled={!canResend || loginLoading}
        />

        <Button
          title={"Verify"}
          onPress={handleVerify}
          textStyle={styles.verifyText}
          style={styles.verifyButton}
          // disabled={otpLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Index;
