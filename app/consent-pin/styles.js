import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
  },
  pinRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  pinInput: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
    textAlign: "center",
    fontSize: 18,
    color: "#000",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  tipsContainer: {
    marginVertical: 20,
  },
  tipsHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  tip: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#00C9A7",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
export default styles;
