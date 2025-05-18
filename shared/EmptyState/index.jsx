import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const EmptyState = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholderText}>{message}</Text>
    </View>
  );
};

export default EmptyState;
