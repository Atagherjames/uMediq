import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
    position: "relative",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  specialty: {
    fontSize: 14,
    color: "#8e8e93",
    marginTop: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rating: {
    fontSize: 13,
    color: "#777",
    marginLeft: 4,
  },

  actionSection: {
    alignItems: "flex-end",
    justifyContent: "center",
    height: 60,
  },
  viewDetailsButton: {
    backgroundColor: "#FDECF5",
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginTop: 40,
    borderRadius: 20,
  },
  viewDetailsText: {
    color: "#000",
    fontSize: 10,
    fontWeight: "500",
  },

  heartIconOverlay: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 5,
  },
});

export default styles;
