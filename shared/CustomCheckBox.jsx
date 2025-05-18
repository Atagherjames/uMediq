import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const CustomCheckBox = ({ value, onValueChange }) => (
  <TouchableOpacity
    style={{
      width: 24,
      height: 24,
      borderWidth: 2,
      borderColor: "#777",
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: value ? "#00DEC4" : "#fff",
    }}
    onPress={() => onValueChange(!value)}
  >
    {value && <Ionicons name="checkmark" size={18} color="#fff" />}
  </TouchableOpacity>
);
