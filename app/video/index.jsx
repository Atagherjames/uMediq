import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import ScreenWrapper from "../../shared/ScreenWrapper";
import ChatBox from "../../components/ChatBox";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "./styles";

import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const DraggableSelfView = () => {
  const translateX = useSharedValue(20);
  const translateY = useSharedValue(20);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: () => {
      translateX.value = withSpring(translateX.value);
      translateY.value = withSpring(translateY.value);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[
          styles.selfOverlay,
          animatedStyle,
          { position: "absolute", zIndex: 10 },
        ]}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/60?img=12" }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

const Index = () => {
  const router = useRouter();
  const [isChatVisible, setIsChatVisible] = useState(false);

  const [secondsLeft, setSecondsLeft] = useState(900);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    const min = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <ScreenWrapper>
      {!isChatVisible && (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Consultation</Text>
        </View>
      )}

      {/* Doctor Info */}
      {!isChatVisible && (
        <View style={styles.sessionInfo}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100?img=3" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.doctorName}>Dr. Evelyn Okafor</Text>
            <Text style={styles.specialty}>Cardiologist</Text>
          </View>
          <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
        </View>
      )}

      {/* Video Feed */}
      <View
        style={[
          styles.videoContainer,
          isChatVisible && styles.videoContainerResize,
        ]}
      >
        <Image
          source={{ uri: "https://placehold.co/300x400?text=Doctor+Feed" }}
          style={styles.videoFeed}
        />

        {!isChatVisible && <DraggableSelfView />}

        {/* LIVE tag */}
        <View style={styles.liveTag}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      </View>

      {/* Call Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="mic-off" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Ionicons name="videocam-off" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => setIsChatVisible(true)}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <ChatBox
          visible={isChatVisible}
          onClose={() => setIsChatVisible(false)}
        />
        <TouchableOpacity style={[styles.controlButton, styles.endCall]}>
          <Ionicons name="call" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Index;
