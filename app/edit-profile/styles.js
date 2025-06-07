import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  imageContainer: {
    alignSelf: "center",
    marginBottom: 20,
    alignItems: "center",
  },
  placeholder: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 45,
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  uploadText: {
    marginTop: 5,
    color: "#666",
    fontSize: 12,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#878787",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F8F8F8",
  },
  orText: {
    textAlign: "center",
    marginBottom: 10,
    color: "#aaa",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  genderButtonSelected: {
    backgroundColor: "#4F75C1",
  },
  genderText: {
    fontSize: 16,
    color: "#000",
  },
  genderTextSelected: {
    color: "#fff",
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  submitButtonEnabled: {
    backgroundColor: "#00DEC4",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
