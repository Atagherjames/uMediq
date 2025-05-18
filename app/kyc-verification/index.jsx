import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ScreenWrapper from "../../shared/ScreenWrapper";
import styles from "./styles";

const KYCVerification = () => {
  const [aadhar, setAadhar] = useState(["", "", "", ""]);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);

  const handleAadharInputChange = (text, index) => {
    const updatedAadhar = [...aadhar];
    updatedAadhar[index] = text;
    setAadhar(updatedAadhar);

    if (text.length === 4 && index < aadhar.length - 1) {
      refsAadhar[index + 1]?.focus();
    }

    if (updatedAadhar.every((block) => block.length === 4)) {
      setIsOtpVisible(true);
    }
  };

  const handleOtpInputChange = (text, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    if (text.length === 1 && index < otp.length - 1) {
      refsOtp[index + 1]?.focus();
    }
  };

  const handleResendOtp = () => {
    setResendTimer(60);
    // Logic for resending OTP goes here
  };

  const refsAadhar = [];
  const refsOtp = [];

  React.useEffect(() => {
    if (isOtpVisible) {
      const interval = setInterval(() => {
        setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOtpVisible]);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>KYC Verification</Text>
          <Text style={styles.headerNote}>
            Note: According to NHA, non-KYC ABHA addresses will be deleted after
            3 months
          </Text>
        </View>

        <Text style={styles.label}>Enter your Aadhar number</Text>
        <View style={styles.aadharContainer}>
          {aadhar.map((_, index) => (
            <TextInput
              key={index}
              ref={(ref) => (refsAadhar[index] = ref)}
              style={styles.aadharInput}
              maxLength={4}
              keyboardType="number-pad"
              value={aadhar[index]}
              onChangeText={(text) => handleAadharInputChange(text, index)}
            />
          ))}
        </View>

        {isOtpVisible && (
          <>
            <Text style={styles.label}>
              Enter OTP received to +91 8956743212 through ABDM
            </Text>
            <View style={styles.otpContainer}>
              {otp.map((_, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (refsOtp[index] = ref)}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="number-pad"
                  value={otp[index]}
                  onChangeText={(text) => handleOtpInputChange(text, index)}
                />
              ))}
            </View>
            <View style={styles.resendContainer}>
              <TouchableOpacity
                onPress={handleResendOtp}
                disabled={resendTimer > 0}
              >
                <Text
                  style={[
                    styles.resendText,
                    resendTimer > 0 && styles.disabledResendText,
                  ]}
                >
                  Resend OTP
                </Text>
              </TouchableOpacity>
              {resendTimer > 0 && (
                <Text style={styles.timerText}>in {resendTimer}s</Text>
              )}
            </View>
          </>
        )}

        <View style={styles.footer}>
          <TouchableOpacity style={styles.skipButton} disabled={!isOtpVisible}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.verifyButton,
              !isOtpVisible && styles.disabledVerifyButton,
            ]}
            disabled={!isOtpVisible}
          >
            <Text style={styles.verifyButtonText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default KYCVerification;
