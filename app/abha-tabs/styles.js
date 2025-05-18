import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  headerIcons: {
    // marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 5,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: "#00E0C6",
  },
  tabText: {
    fontSize: 14,
    color: "#555",
  },
  activeTabText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: "#EAF4F3",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  email: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  details: {
    fontSize: 14,
    color: "#000",
  },
  unlinkContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  unlinkText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7D00FF",
  },
  note: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
  downloadButton: {
    backgroundColor: "#00E0C6",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  downloadButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  emptyStateContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
  },
});
export default styles;
