import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eaf3fb",
    borderRadius: 25,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
    color: "#1a1a1a",
    fontWeight: "500",
    height: 30,
    paddingTop: 6,
    paddingBottom: 0,
    includeFontPadding: false,
    textAlignVertical: "center",
  },

  filterRow: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  filterButton: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontSize: 13,
    color: "#333",
  },
});

export default styles;
