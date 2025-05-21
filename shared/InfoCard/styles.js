import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FDECF5",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    width: 150,
    height: 150,
    elevation: 3,
    position: "relative",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  textSection: {
    zIndex: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 1,
  },
  subtitle: {
    fontSize: 13,
    color: "#555",
  },
  image: {
    position: "absolute",
    top: -10,
    right: -10,
    width: 60,
    height: 60,
    opacity: 0.3,
    zIndex: 1,
  },
});

export default styles;
