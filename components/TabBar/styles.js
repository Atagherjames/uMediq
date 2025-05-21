import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F5F8F9",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 35,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabItem: {
    borderColor: "#4F75C1",
  },
  tabText: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
  activeTabText: {
    color: "#4F75C1",
  },
});
export default styles;
