import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const DoctorCard = ({ item, onPressDetail }) => {
  const router = useRouter();
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => setLiked(!liked)}
        style={styles.heartIconOverlay}
      >
        <Ionicons
          name={liked ? "heart" : "heart-outline"}
          size={25}
          color={liked ? "#ff3b30" : "#8e8e93"}
        />
      </TouchableOpacity>

      <Image source={item.image} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={14} color="#f5a623" />
          <Text style={styles.rating}>
            {item.rating} ({item.reviews} Reviews)
          </Text>
        </View>
      </View>

      <View style={styles.actionSection}>
        <TouchableOpacity
          onPress={() => router.replace("consult/123")}
          style={styles.viewDetailsButton}
        >
          <Text style={styles.viewDetailsText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorCard;
