import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardLabel: {
    color: "#A1A1A1",
    fontSize: 14,
  },
  cardValue: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  tokenBox: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  tokenText: {
    color: "#A1A1A1",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  generateButton: {
    backgroundColor: "#00E0C6",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    flex: 2,
    marginRight: 10,
    alignItems: "center",
  },
  generateButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#000",
  },
});
export default styles;
