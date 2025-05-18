import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  color: {
    color: "#fff",
  },
  title: {
    color: "#0C091F",
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10,
  },

  infoCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },
});
export default styles;
