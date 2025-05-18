import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import ScreenWrapper from "../../shared/ScreenWrapper";
import styles from "./styles";

const SetConsentPinScreen = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);

  const handlePinChange = (value, index, type) => {
    const updatedPin = type === "pin" ? [...pin] : [...confirmPin];
    updatedPin[index] = value;

    if (type === "pin") setPin(updatedPin);
    else setConfirmPin(updatedPin);
  };

  const renderPinInput = (pinArray, type) =>
    pinArray.map((value, index) => (
      <TextInput
        key={index}
        style={styles.pinInput}
        keyboardType="numeric"
        maxLength={1}
        value={value}
        onChangeText={(text) => handlePinChange(text, index, type)}
      />
    ));

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={styles.header}>Set the consent pin</Text>

        <Text style={styles.subHeader}>Type in the pin here</Text>
        <View style={styles.pinRow}>{renderPinInput(pin, "pin")}</View>

        <Text style={styles.subHeader}>Confirm pin</Text>
        <View style={styles.pinRow}>
          {renderPinInput(confirmPin, "confirmPin")}
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.tipsHeader}>Tips for secure pin</Text>
          <Text style={styles.tip}>
            • The pin should have unique numbers, avoid repetition of numbers.
            eg. 2222, 1010, etc.
          </Text>
          <Text style={styles.tip}>
            • Do not use generic pins. eg. 1234, 4321, etc.
          </Text>
          <Text style={styles.tip}>• Do not start with 0.</Text>
          <Text style={styles.tip}>
            • Update your pin once every 3 months to ensure security.
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Set my pin</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default SetConsentPinScreen;
