import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: width * 0.4,
    height: width * 0.4,
  },

  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  loginContainer: {
    marginTop: 20,
    width: "100%",
  },

  inputContainer: {
    marginVertical: 10,
  },

  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 12,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },

  inputFocused: {
    borderColor: "#4382DF",
  },

  passwordWrapper: {
    position: "relative",
    justifyContent: "center",
  },

  passwordInput: {
    paddingRight: 40,
  },

  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 14,
  },

  btn: {
    borderRadius: 12,
    backgroundColor: "#4382DF",
    width: "100%",
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  text2: {
    color: "#4382DF",
    fontWeight: "600",
    marginTop: 5,
  },

  forgotPassword: {
    alignSelf: "center",
    marginTop: 10,
  },

  signUp: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },

  inputText: {
    fontSize: 14,
    color: "#333",
  },
});

export default styles;
