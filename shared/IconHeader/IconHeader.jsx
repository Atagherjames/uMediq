import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const IconHeader = ({
  title,
  onBackPress,
  iconColor = "black",
  iconSize = 24,
}) => {
  return (
    <View style={styles.header}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Ionicons
            name="chevron-back-outline"
            size={iconSize}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default IconHeader;
