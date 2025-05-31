import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
    color: "#333",
  },

  sessionInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  doctorName: {
    fontWeight: "600",
    fontSize: 16,
    color: "#111",
  },
  specialty: {
    color: "#555",
    fontSize: 13,
  },
  timer: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#4F75C1",
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 16,
    position: "relative",
  },
  videoContainerResize: {
    justifyContent: "flex-start",
    marginVertical: 0,
    paddingHorizontal: 0,
  },
  videoFeed: {
    width: "100%",
    height: 400,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  selfOverlay: {
    width: 60,
    height: 80,
    borderRadius: 8,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
  liveTag: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#FF3B30",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  liveText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  controlButton: {
    backgroundColor: "#4F75C1",
    padding: 14,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  endCall: {
    backgroundColor: "#FF3B30",
  },
});

export default styles;
