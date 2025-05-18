// storage/mmkv.ts
import { MMKV } from "react-native-mmkv";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import queryClient from "./queryClient";

const MMKVInstance = new MMKV();

export const saveItem = (key: string, value: string) => {
  try {
    MMKVInstance.set(key, value);
    console.log("saved", value);
  } catch (err) {
    console.error(`Error saving string [${key}]`, err);
  }
};

export const getItem = (key: string) => {
  try {
    return MMKVInstance.getString(key);
  } catch (err) {
    console.error(`Error getting string [${key}]`, err);
    return null;
  }
};

export const removeItem = (key: string) => {
  try {
    MMKVInstance.delete(key);
  } catch (err) {
    console.error(`Error removing item [${key}]`, err);
  }
};

// persistQueryClient({
//   queryClient,
//   persister: {
//     persistClient: async (client) =>
//       saveItem("REACT_QUERY_CACHE", JSON.stringify(client)),
//     restoreClient: async () => {
//       const cached = getItem("REACT_QUERY_CACHE");
//       return cached ? JSON.parse(cached) : undefined;
//     },
//     removeClient: async () => removeItem("REACT_QUERY_CACHE"),
//   },
// });
