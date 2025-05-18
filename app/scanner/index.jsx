import { Camera, useCameraPermissions, CameraView } from "expo-camera";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import ScreenWrapper from "../../shared/ScreenWrapper";
import styles from "./styles";
import { useRouter } from "expo-router";
export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      `Code ${type} Scanned`,
      `Data: ${data}`,
      [
        {
          text: "OK",
          onPress: () => {
            setScanned(false);
            router.push("scan-share");
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          Camera permission not granted.
        </Text>
        <Button title="Request Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <ScreenWrapper>
      <CameraView
        style={styles.camera}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <Text style={styles.headerText}>
          Scan QR code to schedule instant Appointments
        </Text>
        <View style={styles.layerContainer}>
          <View style={styles.layerTop} />
          <View style={styles.layerCenter}>
            <View style={styles.layerLeft} />
            <View style={styles.focused} />
            <View style={styles.layerRight} />
          </View>
          <View style={styles.layerBottom} />
        </View>
      </CameraView>
    </ScreenWrapper>
  );
}
