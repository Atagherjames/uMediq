import { View, Platform, ScrollView, Alert, Text } from "react-native";
import Header from "../../components/Header";
import ScreenWrapper from "../../shared/ScreenWrapper";
import InfoCard from "../../shared/InfoCard/InfoCard";
import WelcomeCard from "../../components/WelcomeCard";
import UploadBanner from "../../components/UploadBanner/UploadBanner";
import FeedCard from "../../shared/FeedCard";
import { FEED_DATA } from "../../data/datas";
import { useRouter } from "expo-router";
import styles from "./styles";

const Index = ({ navigation }) => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        overScrollMode="auto"
        indicatorStyle="white"
        style={
          Platform.OS === "ios" ? { flex: 1, backgroundColor: "#fff" } : {}
        }
      >
        <View style={styles.content}>
          <WelcomeCard onPress={() => router.push("consult")} />
          <View style={styles.infoCard}>
            <InfoCard
              title="Diagnostics"
              subtitle="Book Tests & Check-ups"
              image={{
                uri: "https://res.cloudinary.com/dx0ll70so/image/upload/v1749208338/blood-test_e7qxs3.png",
              }}
              backgroundColor="#FDECF5"
            />

            <InfoCard
              title="Pharma"
              subtitle="Order Medicines Online"
              image={{
                uri: "https://res.cloudinary.com/dx0ll70so/image/upload/v1749208339/drugs_x4qtml.png",
              }}
              backgroundColor="#E6F8F8"
            />
          </View>

          <UploadBanner />

          <View>
            <Text style={styles.title}>Health articles</Text>
            {FEED_DATA.map((item) => (
              <FeedCard
                key={item.id}
                imageSource={item.imageSource}
                title={item.title}
                author={item.author}
                date={item.date}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Index;
