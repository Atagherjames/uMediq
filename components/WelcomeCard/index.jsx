import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const WelcomeCard = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.cardContainer, styles.blueCard]}
      onPress={onPress}
    >
      <View style={styles.leftContent}>
        <Text style={styles.titleBlue}>Consult Doctors</Text>
        <Text style={styles.subtitle}>
          Get Expert Advice From Specialist Doctors
        </Text>
      </View>
      <Image
        source={require("../../assets/images/Pediatrician-amico.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default WelcomeCard;
