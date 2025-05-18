import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    // marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  doctor: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  clinic: {
    fontSize: 16,
    color: "#777",
    marginVertical: 4,
  },
  detail: {
    fontSize: 14,
    color: "#555",
    marginVertical: 2,
  },
  label: {
    fontWeight: "600",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000",
  },
  subtext: {
    fontSize: 14,
    color: "#777",
    marginBottom: 8,
  },
  duration: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  value: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#555",
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  rejectButton: {
    backgroundColor: "#E74C3C",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    marginRight: 8,
    alignItems: "center",
  },
  rejectText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  approveButton: {
    backgroundColor: "#00DEC4",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    marginLeft: 8,
    alignItems: "center",
  },
  approveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
export default styles;
