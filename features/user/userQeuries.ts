// import { useMutation, useQuery } from "@tanstack/react-query";

// import api from "../../api/axiosInstance";
// import { saveToken } from "../../services/storageHelpers";
// import { useRouter } from "expo-router";

// // Login
// export const useLogin = () =>
//   useMutation({
//     mutationFn: async (payload: { email: string; password: string }) => {
//       const { data } = await api.post("/login", payload);
//       return data;
//     },
//     onSuccess: (data) => {
//       saveToken(data.accessToken);
//     },
//   });

// // Fetch Profile
// export const useProfile = () =>
//   useQuery({
//     queryKey: ["user-profile"],
//     queryFn: async () => {
//       const { data } = await api.get("/user/profile");
//       return data;
//     },
//   });
