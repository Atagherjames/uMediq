import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const UploadBanner = ({ onPress }) => {
  return (
    <View style={[styles.cardContainer, styles.purpleCard]}>
      <Image
        source={require("../../assets/images/pescription.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Upload Records</Text>
        <Text style={styles.subtitle}>Add reports & prescriptions</Text>
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={onPress}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadBanner;
