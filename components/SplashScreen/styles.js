import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 10,
    fontFamily: "Berlin Sans FB",
  },
  subtitle: {
    fontSize: 12,
    color: "#1E3A8A",
    marginLeft: 10,
  },
  textContainer: {
    alignItems: "flex-start",
  },
});
export default styles;
