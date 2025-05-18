import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Linking,
  Animated,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { useRouter } from "expo-router";
import ScreenWrapper from "../../shared/ScreenWrapper";
import { Ionicons, Feather } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
import styles from "./styles";
import { slides } from "../../data/datas";
const Index = () => {
  const router = useRouter();
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;



  useEffect(() => {
    startProgressBar();

    return () => {
      progressAnim.stopAnimation();
    };
  }, [activeIndex]);

  const startProgressBar = () => {
    progressAnim.setValue(0);
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        handleNextSlide();
      }
    });
  };

    const handleNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
      carouselRef.current?.scrollTo({ index: activeIndex + 1 });
    } else {
      router.back();  
    }
  };



  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>ABHA</Text>
        </View>
        <View style={styles.progressContainer}>
          {slides.map((_, index) => (
            <View key={index} style={styles.progressBarBackground}>
              <Animated.View
                style={[
                  styles.progressBar,
                  {
                    width:
                      index === activeIndex
                        ? progressAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"],
                          })
                        : index < activeIndex
                        ? "100%"
                        : "0%",
                  },
                ]}
              />
            </View>
          ))}
        </View>

        <Carousel
          ref={carouselRef}
          width={width}
          height={500}
          data={slides}
          scrollAnimationDuration={1000}
          autoPlay={false}
          onSnapToItem={(index) => {
            setActiveIndex(index);
            startProgressBar();
          }}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
              ></TouchableOpacity>

              <Text style={styles.title}>{item.title}</Text>

              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />

              <View style={styles.descriptionContainer}>
                {item.description.map((desc, idx) => (
                  <Text
                    key={idx}
                    style={[
                      styles.description,
                      desc.includes("https://") && styles.link,
                    ]}
                    onPress={() => {
                      if (desc.includes("https://")) {
                        Linking.openURL(desc);
                      }
                    }}
                  >
                    {`${idx + 1}. ${desc}`}
                  </Text>
                ))}
              </View>
            </View>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};



export default Index;
