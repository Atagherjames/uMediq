import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userNameSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 6,
    borderRadius: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginRight: 4,
  },
  dropdownIcon: {
    marginLeft: 100,
  },
  iconsSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 16,
  },
});
export default styles;
