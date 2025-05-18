import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:20,
    paddingBottom:10,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
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
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardLabel: {
    color: "#A1A1A1",
    fontSize: 14,
  },
  cardValue: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  expiredTokenBox: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  expiredTokenText: {
    color: "#A1A1A1",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  generateButton: {
    backgroundColor: "#00E0C6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 2,
    marginRight: 10,
    alignItems: "center",
  },
  generateButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#F0F0F0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#000",
  },
  placeholderContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  placeholderText: {
    color: "#A1A1A1",
    fontSize: 16,
  },
});
 export default styles