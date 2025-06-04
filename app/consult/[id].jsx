import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import IconHeader from "../../shared/IconHeader/IconHeader";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { useRouter } from "expo-router";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const Index = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [activeTab, setActiveTab] = useState("About");
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const doctorData = {
    name: "Dr. Marilyn Stanton",
    specialty: "General Physician",
    rating: 4.5,
    reviewsCount: 85,
    visits: "2.3k",
    patients: "1.1k",
    experienceYears: "2 years",
    image: { uri: "https://randomuser.me/api/portraits/women/65.jpg" },
    aboutText:
      "Dr. Marilyn Stanton is a highly experienced and board-certified General Physician committed to providing comprehensive care. With a focus on preventive medicine and patient education, she aims to empower individuals to take control of their health journey.",
    consultationPrice: 5000,
    hospital: "City Hospital",
    medicalSchool: "Medical School University",
  };

  const mockAvailability = {
    "2025-06-04": ["9:00 AM", "10:30 AM", "1:00 PM", "3:00 PM"],
    "2025-06-05": ["11:00 AM", "2:00 PM", "4:00 PM"],
    "2025-06-06": ["9:30 AM", "11:00 AM", "3:30 PM"],
    "2025-06-07": ["10:00 AM", "1:00 PM", "5:00 PM"],
    "2025-06-08": ["9:00 AM", "10:00 AM", "12:00 PM"],
    "2025-06-09": ["1:00 PM", "3:00 PM"],
  };

  const formatDateForLookup = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const currentDaySlots =
    mockAvailability[formatDateForLookup(selectedDate)] || [];

  const generateDatesForSelector = (numDays) => {
    const dates = [];
    for (let i = 0; i < numDays; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const options = { weekday: "short", day: "numeric", month: "short" };
      const label = d.toLocaleDateString("en-US", options);
      dates.push({
        label: label,
        value: d,
      });
    }
    return dates;
  };

  const availableDatesForSelector = generateDatesForSelector(7);

  useEffect(() => {
    if (showConsultationModal && !selectedDate) {
      setSelectedDate(new Date());
    }
  }, [showConsultationModal, selectedDate]);

  const onDateChange = (event, selectedDateFromPicker) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDateFromPicker) {
      setSelectedDate(selectedDateFromPicker);
      setSelectedTime(null);
    }
  };

  const reviewsData = [
    {
      id: 1,
      reviewerName: "Allison Dorwart",
      rating: 4.5,
      date: "19 May 2024",
      comment:
        "Dr. Stanton was thoroughly, attentive, and took the time to answer all my questions in detail. I left feeling confident in my health and the care I received. Highly recommend!",
      reviewerImage: {
        uri: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    },
    {
      id: 2,
      reviewerName: "Nuraiz Donin",
      rating: 4.5,
      date: "19 May 2024",
      comment:
        "Dr. Stanton was attentive, listened carefully to my concerns, and provided clear, insightful explanations.",
      reviewerImage: { uri: "https://randomuser.me/api/portraits/men/33.jpg" },
    },
  ];

  const renderAboutContent = () => (
    <View style={styles.tabContentSection}>
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.sectionContentText}>{doctorData.aboutText}</Text>

      <View style={styles.experienceContainer}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.experienceItem}>
          <Feather name="briefcase" size={18} color="#555" />
          <Text style={styles.experienceText}>Years of Experience</Text>
          <Text style={styles.experienceValue}>
            {doctorData.experienceYears}
          </Text>
        </View>
        <View style={styles.experienceItem}>
          <MaterialIcons name="school" size={18} color="#555" />
          <Text style={styles.experienceText}>Medical School</Text>
          <Text style={styles.experienceValue}>{doctorData.medicalSchool}</Text>
        </View>
        <View style={styles.experienceItem}>
          <MaterialIcons name="local-hospital" size={18} color="#555" />
          <Text style={styles.experienceText}>Affiliated Hospital</Text>
          <Text style={styles.experienceValue}>{doctorData.hospital}</Text>
        </View>
      </View>
    </View>
  );

  const renderReviewsContent = () => (
    <View style={styles.tabContentSection}>
      <Text style={styles.sectionTitle}>Last reviews</Text>
      {reviewsData.map((review) => (
        <View key={review.id} style={styles.reviewItem}>
          <View style={styles.reviewerHeader}>
            <Image source={review.reviewerImage} style={styles.reviewerImage} />
            <View style={styles.reviewerInfo}>
              <Text style={styles.reviewerName}>{review.reviewerName}</Text>
              <View style={styles.reviewRatingStars}>
                {[...Array(5)].map((_, i) => (
                  <Ionicons
                    key={i}
                    name="star"
                    size={14}
                    color={
                      i < Math.floor(review.rating) ? "#FFD700" : "#E0E0E0"
                    }
                  />
                ))}
                <Text style={styles.reviewRatingText}>
                  {review.rating.toFixed(1)}
                </Text>
              </View>
            </View>
            <Text style={styles.reviewDate}>{review.date}</Text>
          </View>
          <Text style={styles.reviewComment}>{review.comment}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScreenWrapper bg="#fff">
      <IconHeader onBackPress={() => router.back()} />
      <ScrollView
        style={styles.scrollViewContent}
        contentContainerStyle={{
          paddingBottom: 36 + insets.bottom + 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.doctorProfileCard}>
          <View style={styles.profileHeader}>
            <Image
              source={doctorData.image}
              style={styles.doctorImage}
              accessibilityLabel={`${doctorData.name}'s profile picture`}
            />
            <View style={styles.doctorTextInfo}>
              <Text style={styles.doctorName}>{doctorData.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctorData.specialty}</Text>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, i) => (
                  <Ionicons
                    key={i}
                    name="star"
                    size={16}
                    color={
                      i < Math.floor(doctorData.rating) ? "#FFD700" : "#E0E0E0"
                    }
                  />
                ))}
                <Text style={styles.ratingText}>
                  {doctorData.rating.toFixed(1)}
                </Text>
                <Text style={styles.reviewsText}>
                  ({doctorData.reviewsCount} reviews)
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Ionicons name="location-outline" size={24} color="#007BFF" />
              <Text style={styles.statValue}>{doctorData.visits}</Text>
              <Text style={styles.statLabel}>Visits</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Ionicons name="people-outline" size={24} color="#007BFF" />
              <Text style={styles.statValue}>{doctorData.patients}</Text>
              <Text style={styles.statLabel}>Patients</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Feather name="briefcase" size={24} color="#007BFF" />
              <Text style={styles.statValue}>{doctorData.experienceYears}</Text>
              <Text style={styles.statLabel}>Exp</Text>
            </View>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "About" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("About")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "About" && styles.activeTabText,
              ]}
            >
              About
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "Reviews" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("Reviews")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Reviews" && styles.activeTabText,
              ]}
            >
              Reviews
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "About" ? renderAboutContent() : renderReviewsContent()}
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.fixedConsultationButton,
          { paddingBottom: insets.bottom + 18 },
        ]}
        activeOpacity={0.8}
        onPress={() => setShowConsultationModal(true)}
      >
        <Text style={styles.fixedConsultationButtonText}>Consultation</Text>
      </TouchableOpacity>
      {showConsultationModal && (
        <View
          style={[
            styles.consultationModal,
            { paddingBottom: insets.bottom + 20 },
          ]}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Consultation Time</Text>
            <TouchableOpacity onPress={() => setShowConsultationModal(false)}>
              <Ionicons name="close-circle-outline" size={30} color="#666" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.pickDateButton}
          >
            <AntDesign name="calendar" size={20} color="#007BFF" />
            <Text style={styles.pickDateButtonText}>
              {selectedDate
                ? selectedDate.toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Select Date"}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={selectedDate || new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onDateChange}
              minimumDate={new Date()}
            />
          )}

          <Text style={styles.timeSlotsTitle}>Available Times:</Text>
          <View style={styles.timeSlotsContainer}>
            {currentDaySlots.length > 0 ? (
              currentDaySlots.map((time) => (
                <TouchableOpacity
                  key={time}
                  style={[
                    styles.timeSlotButton,
                    selectedTime === time && styles.selectedTimeSlotButton,
                  ]}
                  onPress={() => setSelectedTime(time)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.timeSlotText,
                      selectedTime === time && styles.selectedTimeSlotText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={styles.noSlotsText}>
                No slots available for this date.
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={[
              styles.confirmConsultationButton,
              (!selectedDate || !selectedTime) && styles.confirmButtonDisabled,
            ]}
            onPress={() => {
              if (selectedDate && selectedTime) {
                console.log(
                  `Consultation requested for ${
                    doctorData.name
                  } on ${selectedDate.toLocaleDateString()} at ${selectedTime}`
                );
                setShowConsultationModal(false);
              }
            }}
            disabled={!selectedDate || !selectedTime}
            activeOpacity={0.8}
          >
            <Text style={styles.confirmConsultationButtonText}>
              Send Consultation Request (₦
              {doctorData.consultationPrice.toLocaleString()})
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
  },
  doctorProfileCard: {
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  doctorTextInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 2,
  },
  doctorSpecialty: {
    fontSize: 15,
    color: "#556270",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2C3E50",
    marginLeft: 5,
  },
  reviewsText: {
    fontSize: 13,
    color: "#95A5A6",
    marginLeft: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    paddingTop: 15,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2C3E50",
    marginTop: 5,
  },
  statLabel: {
    fontSize: 13,
    color: "#7F8C8D",
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: "80%",
    backgroundColor: "#E0E0E0",
    marginHorizontal: 10,
  },

  tabsContainer: {
    backgroundColor: "#F9F9F9",
    flexDirection: "row",
    borderRadius: 50,
    marginHorizontal: 16,
    marginTop: 15,
    padding: 5,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 50,
  },
  activeTab: {
    backgroundColor: "#4382DF",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#556270",
  },
  activeTabText: {
    color: "#FFFFFF",
  },

  tabContentSection: {
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    marginHorizontal: 16,
    marginTop: 15,
    padding: 20,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 12,
  },
  sectionContentText: {
    fontSize: 15.5,
    lineHeight: 24,
    color: "#555",
  },

  experienceContainer: {
    marginTop: 20,
  },
  experienceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingLeft: 5,
  },
  experienceText: {
    fontSize: 15.5,
    color: "#555",
    marginLeft: 15,
    flex: 1,
  },
  experienceValue: {
    fontSize: 15.5,
    fontWeight: "600",
    color: "#333",
  },

  reviewItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  reviewerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  reviewerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 2,
  },
  reviewRatingStars: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewRatingText: {
    fontSize: 13,
    color: "#555",
    marginLeft: 5,
  },
  reviewDate: {
    fontSize: 12,
    color: "#95A5A6",
  },
  reviewComment: {
    fontSize: 15,
    lineHeight: 22,
    color: "#555",
  },

  fixedConsultationButton: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "#4382DF",
    paddingTop: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -8 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      },
      android: {
        elevation: 15,
        paddingBottom: 18,
      },
    }),
  },
  fixedConsultationButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  consultationModal: {
    backgroundColor: "#F9F9F9",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2C3E50",
  },
  pickDateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F7FF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  pickDateButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007BFF",
    marginLeft: 10,
  },
  timeSlotsTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 10,
  },
  timeSlotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  timeSlotButton: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 100,
  },
  selectedTimeSlotButton: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
    ...Platform.select({
      ios: {
        shadowColor: "#007BFF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: { elevation: 3 },
    }),
  },
  timeSlotText: {
    fontSize: 15,
    color: "#444",
    fontWeight: "500",
  },
  selectedTimeSlotText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  noSlotsText: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    marginTop: 15,
    width: "100%",
  },
  confirmConsultationButton: {
    backgroundColor: "#4382DF",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 25,
  },
  confirmButtonDisabled: {
    backgroundColor: "#8C9BA8",
  },
  confirmConsultationButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default Index;
