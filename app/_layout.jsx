import { Stack, useSegments } from "expo-router";
import TabBar from "../components/TabBar";
import { screens } from "../data/datas";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const _layout = () => {
  const segments = useSegments();
  console.log("Current Segments:", segments);

  const routesWithTabBar = ["home", "records", "appointment", "profile"];
  const currentRoute = segments[0] || "";

  const shouldShowTabBar = routesWithTabBar.includes(currentRoute);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          {screens.map(({ name, options }) => (
            <Stack.Screen key={name} name={name} options={options} />
          ))}
        </Stack>
        {shouldShowTabBar && <TabBar />}
      </QueryClientProvider>
    </>
  );
};

export default _layout;
