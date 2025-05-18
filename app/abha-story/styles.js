import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerText: { fontSize: 18, fontWeight: "bold", marginLeft: 8 },

  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 2,
    borderRadius: 2,
  },
  progressBar: {
    height: 3,
    backgroundColor: "#00C9A7",
    borderRadius: 2,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  backText: {
    fontSize: 18,
    color: "#00C9A7",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  descriptionContainer: {
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  link: {
    color: "#00C9A7",
    textDecorationLine: "underline",
  },
});
export default styles;
