import { Stack, useSegments } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabBar from "../components/TabBar";
import { screens } from "../data/datas";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StyleSheet } from "react-native";

const _layout = () => {
  const segments = useSegments();
  const routesWithTabBar = ["home", "records", "appointment", "profile"];
  const currentRoute = segments[0] || "";

  const shouldShowTabBar = routesWithTabBar.includes(currentRoute);

  const queryClient = new QueryClient();

  return (
    <GestureHandlerRootView style={styles.root}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          {screens.map(({ name, options }) => (
            <Stack.Screen key={name} name={name} options={options} />
          ))}
        </Stack>
        {shouldShowTabBar && <TabBar />}
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default _layout;
