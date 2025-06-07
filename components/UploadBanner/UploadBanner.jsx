import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";

const UploadBanner = () => {
  const router = useRouter();
  return (
    <View style={[styles.cardContainer, styles.purpleCard]}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dx0ll70so/image/upload/v1749208344/pescription_xwfzus.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Upload Records</Text>
        <Text style={styles.subtitle}>Add reports & prescriptions</Text>
      </View>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => router.push("add-record")}
      >
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadBanner;
