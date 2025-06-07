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
        source={{
          uri: "https://res.cloudinary.com/dx0ll70so/image/upload/v1749208340/Pediatrician-amico_pjkywp.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default WelcomeCard;
