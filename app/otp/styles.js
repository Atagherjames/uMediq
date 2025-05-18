import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#878787",
    textAlign: "center",
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#F7F7F7",
    marginHorizontal: 5,
  },
  resendOtp: {
    fontSize: 14,
    color: "#4A90E2",
    marginTop: 10,
    marginBottom: 30,
  },
  verifyButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    alignItems: "center",
  },
  verifyText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
export default styles;
