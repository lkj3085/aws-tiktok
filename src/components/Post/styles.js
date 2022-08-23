import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("screen").height - 48,
  },
  videoPlayButton: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    zIndex: 100,
  },
  video: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  uiContainer: {
    height: "100%",
    justifyContent: "flex-end",
  },
  rightContainer: {
    alignSelf: "flex-end",
    height: 300,
    justifyContent: "space-between",
    marginRight: 5,
  },
  bottomContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  handle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 10,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  songName: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#4c4c4c",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  iconContainer: {
    alignItems: "center",
  },
  statsLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
});

export default styles;
