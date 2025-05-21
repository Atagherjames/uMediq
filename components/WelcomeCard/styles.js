import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  blueCard: {
    backgroundColor: "#4F75C1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftContent: {
    flex: 1,
    paddingRight: 12,
  },

  titleBlue: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  subtitle: {
    color: "#E0EFFF",
    fontSize: 14,
  },

  image: {
    width: 90,
    height: 90,
  },
});
