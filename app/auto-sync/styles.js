import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
    flexDirection: "row",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  optionContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  optionDescription: {
    fontSize: 12,
    color: "#555",
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
  },
  buttonDescription: {
    fontSize: 12,
    color: "#555",
  },
});
 export default styles