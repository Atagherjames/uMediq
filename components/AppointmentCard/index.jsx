import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./styles";
 
const AppointmentCard = ({
  hospitalName,
  location,
  time,
  tokenStatus,
  onGenerateToken,
  onCancel,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Text style={styles.cardLabel}>Hospital/clinic</Text>
        <Text style={styles.cardValue}>{hospitalName}</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.cardLabel}>Location</Text>
        <Text style={styles.cardValue}>{location}</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.cardLabel}>Time</Text>
        <Text style={styles.cardValue}>{time}</Text>
      </View>

      {tokenStatus && (
        <View style={styles.tokenBox}>
          <Text style={styles.tokenText}>{tokenStatus}</Text>
        </View>
      )}

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.generateButton}
          onPress={onGenerateToken}
        >
          <Text style={styles.generateButtonText}>Generate new token</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointmentCard;


