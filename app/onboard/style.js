import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "yellow",
    marginBottom: 100,
  },
  dot: {
    backgroundColor: "yellow",
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginLeft: 5,
    position: "absolute",
    right: -20,
    bottom: 112,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#222",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: "center",
    paddingBottom: 40,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  googleButton: {
    backgroundColor: "#FFFFFF",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  googleIcon: {
    fontSize: 20,
    color: "#000",
    marginRight: 10,
  },

  googleButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
  },
  darkButton: {
    backgroundColor: "#333",
  },
  darkButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default styles;
