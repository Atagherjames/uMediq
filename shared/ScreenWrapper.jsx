import { View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, bg }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: bg || "transparent" }}>
      <View
        style={{
          height: top,
          backgroundColor: "#ffffff",
        }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#ffffff"
          translucent={true}
        />
      </View>

      <View style={{ flex: 1, backgroundColor: bg || "transparent" }}>
        {children}
      </View>
    </View>
  );
};

export default ScreenWrapper;
