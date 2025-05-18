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
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
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
  languageButton: {
    paddingVertical: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#00DEC4", 
  },
  languageText: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
  selectedText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
export default styles;