import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../shared/Button";
import { useRouter } from "expo-router";
import styles from "./styles";

const Header = () => {
  const router = useRouter();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileSection}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.userNameSection}>
          <Text style={styles.userName}>Jane Doe</Text>
          <Ionicons
            name="chevron-down"
            size={20}
            color="#333"
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.iconsSection}>
        <Button
          onPress={() => router.push("scanner")}
          title={<MaterialIcons name="shopping-cart" size={24} color="#333" />}
          style={styles.iconButton}
        />
        <Button
          title={
            <MaterialIcons name="notifications-none" size={24} color="#333" />
          }
          style={styles.iconButton}
        />
      </View>
    </View>
  );
};

export default Header;
