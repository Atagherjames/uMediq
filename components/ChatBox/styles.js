import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  messagesList: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  messageContainer: {
    maxWidth: "75%",
    marginBottom: 12,
    padding: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  doctorMsg: {
    backgroundColor: "#dbeafe",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  patientMsg: {
    backgroundColor: "#a5f3fc",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: "#111",
  },
  chatImage: {
    width: 160,
    height: 120,
    borderRadius: 10,
    resizeMode: "cover",
  },
  imageHint: {
    fontSize: 10,
    color: "#666",
    marginTop: 4,
    textAlign: "center",
  },
  timestamp: {
    fontSize: 10,
    color: "#555",
    marginTop: 6,
    alignSelf: "flex-end",
  },
  inputRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderColor: "#ddd",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    maxHeight: 100,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#eee",
    borderRadius: 20,
    color: "#111",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#0ea5e9",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  imageButton: {
    marginRight: 8,
    backgroundColor: "#22d3ee",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageButtonText: {
    fontSize: 20,
    color: "#fff",
  },

  overlayBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  chatBoxContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#4F75C1",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  chatTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
});
