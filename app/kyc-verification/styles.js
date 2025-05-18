import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  headerNote: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  aadharContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  aadharInput: {
    width: 70,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#F9F9F9",
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
    borderColor: "#ddd",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#F9F9F9",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  resendText: {
    fontSize: 14,
    color: "#6200EA",
    fontWeight: "bold",
  },
  disabledResendText: {
    color: "#aaa",
  },
  timerText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skipButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  skipButtonText: {
    color: "#aaa",
    fontSize: 14,
    fontWeight: "bold",
  },
  verifyButton: {
    backgroundColor: "#00C9A7",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  disabledVerifyButton: {
    backgroundColor: "#ddd",
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default styles;