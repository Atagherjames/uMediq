import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    // paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },

  sectionTitle: {
    fontSize: 12,
    color: "#7D7D7D",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  profileInfo: {
    marginLeft: 12,
    flex: 1,
  },

  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  profileDetails: {
    fontSize: 14,
    color: "#7D7D7D",
    marginTop: 2,
  },

  tag: {
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  tagText: {
    fontSize: 12,
    color: "#7D7D7D",
    fontWeight: "600",
  },

  addButton: {
    backgroundColor: "#00D0BD",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 80,
    left: 16,
    right: 16,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;