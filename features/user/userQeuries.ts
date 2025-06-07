import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { saveItem, getItem, removeItem } from "../../services/storageHelpers";
import api from "../../api/axiosInstance";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoggedInUser {
  uid: string;
  email: string | null;
  token: string;
}

export const useProfile = () =>
  useQuery({
    queryKey: ["USER_PROFILE"],
    queryFn: async () => {
      const { data } = await api.get("/user/profile");
      return data;
    },
  });

export const useAuthStatus = () => {
  return useQuery<LoggedInUser | null, Error>({
    queryKey: ["AUTH_STATUS"],
    queryFn: async () => {
      try {
        const storedUser = getItem("LOGGED_IN_USER");
        if (storedUser) {
          const user: LoggedInUser = JSON.parse(storedUser);
          return user;
        }
        return null;
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        removeItem("LOGGED_IN_USER");
        return null;
      }
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: true,
  });
};

// Login Hook (modified to invalidate AUTH_STATUS)
export const useLogin = (
  onSuccessCallback?: (user: any) => void,
  onErrorCallback?: (error: Error) => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: LoginPayload): Promise<LoggedInUser> => {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();

      const loggedInUser: LoggedInUser = {
        uid: user.uid,
        email: user.email,
        token,
      };

      saveItem("LOGGED_IN_USER", JSON.stringify(loggedInUser));

      return loggedInUser;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["USER_PROFILE"] });
      queryClient.invalidateQueries({ queryKey: ["AUTH_STATUS"] });
      onSuccessCallback?.(data);
    },
    onError: (error: any) => {
      onErrorCallback?.(error);
    },
  });
};

export const useLogout = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await auth.signOut();
      removeItem("LOGGED_IN_USER");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["USER_PROFILE"] });
      queryClient.removeQueries({ queryKey: ["USER_PROFILE"] });
      queryClient.invalidateQueries({ queryKey: ["AUTH_STATUS"] });
      queryClient.removeQueries({ queryKey: ["AUTH_STATUS"] });
      onSuccessCallback?.();
    },
    onError: (error: any) => {
      console.error("Logout error:", error);
    },
  });
};
