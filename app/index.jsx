import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  withSequence,
} from "react-native-reanimated";
import AnimatedSplashScreen from "../components/SplashScreen";
import { saveItem, getItem } from "../services/storageHelpers";
import ScreenWrapper from "../shared/ScreenWrapper";
import Svg, { Path } from "react-native-svg";
import Button from "../shared/Button";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const Index = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);
  const router = useRouter();

  const carouselData = [
    {
      image: require("../assets/images/Orthopedic-amico.png"),
      mainText: "Consult Your Doctor",
      description:
        "Not feeling well? Open the app and start a remote consultation — no delays, no hassle.",
      pathData: " ",
    },
    {
      image: require("../assets/images/Pharmacist-amico.png"),
      mainText: "Order Medicines",
      description:
        "Easily order drugs from nearby pharmacies and get them delivered to you.",
      pathData: " ",
    },
    {
      image: require("../assets/images/Artificial intelligence-amico.png"),
      mainText: "Ask Your Health Questions",
      description:
        "Got health doubts? Ask our AI anytime and get instant, reliable answers.",
      pathData: " ",
    },
  ];

  useEffect(() => {
    async function prepareApp() {
      await new Promise((resolve) => setTimeout(resolve, 3500));
      const onboarded = getItem("hasOnboarded");
      setAppIsReady(true);
      if (onboarded === "true") {
        router.replace("/onboard");
      }
    }
    prepareApp();
  }, []);

  useEffect(() => {
    translateX.value = withTiming(0, { duration: 300, easing: Easing.ease });
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === carouselData.length - 1) {
      saveItem("hasOnboarded", "true");
      router.replace("/onboard");
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );

      translateX.value = withSequence(
        withTiming(width, { duration: 300, easing: Easing.ease }),
        withTiming(0, { duration: 300, easing: Easing.ease })
      );
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  if (!appIsReady) {
    return <AnimatedSplashScreen />;
  }

  return (
    <ScreenWrapper>
      <LinearGradient colors={["#ffffff", "#4A90E2"]} style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fffff"
          translucent={false}
        />
        <View style={styles.container}>
          <View style={styles.illustrationContainer}>
            <View style={styles.container}>
              <Svg
                width={width * 1.5}
                height={width}
                viewBox="0 0 442 390"
                fill="none"
                style={styles.vector}
              >
                <Path d={carouselData[currentIndex].pathData} fill="#4A90E2" />
              </Svg>
            </View>
            <Animated.View style={[styles.illustrationWrapper, animatedStyle]}>
              <Image
                source={carouselData[currentIndex].image}
                style={styles.illustration}
                resizeMode="contain"
              />
            </Animated.View>
          </View>
          <View style={styles.carouselContent}>
            <View style={styles.textSection}>
              <Text style={styles.mainText}>
                {carouselData[currentIndex].mainText}
              </Text>
              <Text style={styles.description}>
                {carouselData[currentIndex].description}
              </Text>
            </View>
            <View style={styles.pagination}>
              {carouselData.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentIndex === index && styles.activeDot,
                  ]}
                />
              ))}
            </View>
            <View style={styles.centerButton}>
              <Button
                title={"Next"}
                style={styles.nextButton}
                textStyle={styles.btnText}
                onPress={handleNext}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScreenWrapper>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  illustrationWrapper: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  illustration: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  carouselContent: {
    marginBottom: 100,
  },
  textSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E1E1E",
  },
  description: {
    fontSize: 14,
    color: "#000000",
    textAlign: "center",
    marginTop: 5,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 2,
    backgroundColor: "#ffffff",
    marginHorizontal: 5,
    opacity: 0.5,
  },
  activeDot: {
    backgroundColor: "#4A90E2",
    opacity: 1,
  },
  nextButton: {
    width: 150,
    height: 50,
    borderRadius: 35,
    backgroundColor: "#007AFF",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  btnText: {
    color: "#fff",
  },
  centerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
