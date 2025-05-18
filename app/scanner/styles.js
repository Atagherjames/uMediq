import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    backgroundColor: "#444",
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: "#fff",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  permissionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-start",
  },
  layerContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  layerTop: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  layerCenter: {
    flexDirection: "row",
    borderRadius: 20,
  },
  layerLeft: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  focused: {
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: "#00FF00",
    borderRadius: 30,
  },
  layerRight: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  layerBottom: {
    flex: 1,
    // backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});
export default styles;
