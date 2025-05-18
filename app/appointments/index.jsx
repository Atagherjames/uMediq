import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { appointmentsData } from "../../data/datas";
import AppointmentCard from "../../components/AppointmentCard";
import EmptyState from "../../shared/EmptyState";
import IconHeader from "../../shared/IconHeader/IconHeader";
const Index = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Upcoming");

  const renderContent = () => {
    switch (activeTab) {
      case "Upcoming":
        return appointmentsData.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            hospitalName={appointment.hospitalName}
            location={appointment.location}
            time={appointment.time}
            tokenStatus={appointment.tokenStatus}
            onGenerateToken={() =>
              console.log("Generate token for", appointment.id)
            }
            onCancel={() => console.log("Cancel appointment", appointment.id)}
          />
        ));
      case "Past":
        return (
          <EmptyState message={" You have no past appointments records."} />
        );
      case "Linked Facilities":
        return <EmptyState message={"  No linked facilities yet."} />;
      default:
        return null;
    }
  };

  return (
    <ScreenWrapper>
      <IconHeader
        title={"My Appointments"}
        iconSize={24}
        onBackPress={() => router.back()}
      />
      <View style={styles.container}>
        <View style={styles.tabsContainer}>
          {["Upcoming", "Past", "Linked Facilities"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.contentContainer}>
          {renderContent()}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

const UpcomingAppointments = () => (
  <View style={styles.card}>
    <View style={styles.cardRow}>
      <Text style={styles.cardLabel}>Hospital/clinic</Text>
      <Text style={styles.cardValue}>Jones Clinic</Text>
    </View>
    <View style={styles.cardRow}>
      <Text style={styles.cardLabel}>Location</Text>
      <Text style={styles.cardValue}>Hyderabad</Text>
    </View>
    <View style={styles.cardRow}>
      <Text style={styles.cardLabel}>Time</Text>
      <Text style={styles.cardValue}>Today, 04:15 pm - 04:45 pm</Text>
    </View>

    <View style={styles.expiredTokenBox}>
      <Text style={styles.expiredTokenText}>Your token has expired.</Text>
    </View>

    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.generateButton}>
        <Text style={styles.generateButtonText}>Generate new token</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const PastAppointments = () => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>No past appointments.</Text>
  </View>
);

const LinkedFacilities = () => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>No linked facilities yet.</Text>
  </View>
);

export default Index;
