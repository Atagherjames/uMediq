import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import ScreenWrapper from "../../shared/ScreenWrapper";
import DoctorCard from "../../components/DoctorCard";
import { useRouter } from "expo-router";
import { specialties } from "../../data/datas";
import IconHeader from "../../shared/IconHeader/IconHeader";

const doctors = [
  {
    id: 1,
    name: "Dr. Susan Bright",
    specialty: "Dermatologist",
    rating: 4.6,
    reviews: "100+",
    hospital: "City Hospital",
    rate: 25,
    image: {
      uri: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  },
  {
    id: 2,
    name: "Dr. James Wong",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: "120+",
    hospital: "Green Clinic",
    rate: 30,
    image: {
      uri: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
];

const Index = () => {
  const router = useRouter();
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [showTopRated, setShowTopRated] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const renderHeader = () => (
    <>
      <IconHeader
        title="Find a Doctor"
        onBackPress={() => router.back()}
      ></IconHeader>

      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          placeholder="Search doctors by name and specialty"
          style={styles.searchInput}
          placeholderTextColor="#888"
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {/* ⭐ Top Rated */}
        <TouchableOpacity
          style={[
            styles.filterButton,
            showTopRated && { backgroundColor: "#007bff" },
          ]}
          onPress={() => setShowTopRated((prev) => !prev)}
        >
          <Ionicons
            name="star"
            size={16}
            color={showTopRated ? "#fff" : "#333"}
          />
        </TouchableOpacity>

        {/* ❤️ Favorites */}
        <TouchableOpacity
          style={[
            styles.filterButton,
            showFavorites && { backgroundColor: "#007bff" },
          ]}
          onPress={() => setShowFavorites((prev) => !prev)}
        >
          <MaterialIcons
            name="favorite-border"
            size={16}
            color={showFavorites ? "#fff" : "#333"}
          />
        </TouchableOpacity>

        {/* 🩺 Specialties */}
        {specialties.map((specialty) => {
          const isSelected = specialty === selectedSpecialty;
          return (
            <TouchableOpacity
              key={specialty}
              style={[
                styles.filterButton,
                isSelected && { backgroundColor: "#007bff" },
              ]}
              onPress={() =>
                setSelectedSpecialty(isSelected ? null : specialty)
              }
            >
              <Text
                style={[
                  styles.filterText,
                  isSelected && { color: "#fff", fontWeight: "600" },
                ]}
              >
                {specialty}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );

  return (
    <ScreenWrapper bg="#fff">
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <DoctorCard item={item} />}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
};

export default Index;
