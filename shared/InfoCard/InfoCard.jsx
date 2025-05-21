import { View, Text, Image } from "react-native";

import styles from "./styles";
const InfoCard = ({ title, subtitle, image, backgroundColor }) => {
  return (
    <View style={[styles.card, backgroundColor && { backgroundColor }]}>
      <View style={styles.content}>
        <View style={styles.textSection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
    </View>
  );
};

export default InfoCard;
