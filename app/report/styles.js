import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  subText: {
    fontSize: 13,
    color: "#666",
    marginBottom: 15,
  },
  inputContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 10,
    minHeight: 220,
    position: "relative",
  },
  textInput: {
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
  attachmentIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  clearButton: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
  clearButtonText: {
    color: "#333",
    fontWeight: "600",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#00DEC4",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
export default styles;
