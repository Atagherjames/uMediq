import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  optionButton: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
  },
  subText: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    paddingBottom: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalDescription: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
    // marginBottom: 15,
    lineHeight: 20,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
  },
  profileDetails: {
    fontSize: 12,
    color: "#888",
  },
  badge: {
    backgroundColor: "#E5E5E5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: "auto",
  },
  badgeText: {
    fontSize: 10,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#F0F0F0",
    padding: 12,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  cancelText: {
    color: "#333",
    fontWeight: "600",
  },
  confirmButton: {
    backgroundColor: "#00E0C0",
    padding: 12,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  confirmText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  fab: {
    backgroundColor: "#00C4B4",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 100,
    right: 20,
  },
});
export default styles;