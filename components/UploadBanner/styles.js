import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    padding: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  purpleCard: {
    backgroundColor: "#fff",
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 10,
    color: "#000",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  uploadButton: {
    backgroundColor: "#FDECF5",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  uploadButtonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
});
