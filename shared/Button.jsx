import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

const Button = ({
  title,
  icon,
  icon2,
  iconStyle,
  color,
  onPress,
  size,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {icon2 && (
        <Ionicons name={icon2} style={iconStyle} size={size} color={color} />
      )}
      <Text style={textStyle}>{title}</Text>
      {icon && (
        <Ionicons name={icon} style={iconStyle} size={size} color={color} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
