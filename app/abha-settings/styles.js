import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  listContainer: {
    padding: 16,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  modalBottom: {
    maxHeight: "50%",
  },
  modalWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: "white",
    marginVertical: 8,
    // marginHorizontal: 10,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  listText: {
    fontSize: 16,
    color: "black",
  },
  unlinkModal: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
  },
  unlinkTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  unlinkDescription: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  unlinkNote: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  unlinkDetails: {
    fontSize: 12,
    textAlign: "left",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  unlinkButton: {
    flex: 1,
    backgroundColor: "#00DEC4",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  unlinkButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
