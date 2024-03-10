import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  imgBackground: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cardLogin: {
    width: "80%",
    padding: 20,
    backgroundColor: "#ffffff33",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
    borderColor: "#000",
  },

  title: {
    fontSize: 40,
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 40,
  },

  areaInputs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    width: 120,
    padding: 10,
    marginTop: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  btnText: {
    fontWeight: 700,
    fontSize: 17,
    letterSpacing: 1,
    color: "#000000",
  },

  iconContainer: {
    position: "absolute",
    top: -50,
    left: "50%",
    marginLeft: -30,
    zIndex: 1,
  },

  iconLogin: {
    width: 100,
    height: 100,
  },

  icon: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },

  textInput: {
    width: "80%",
    letterSpacing: 1,
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    borderColor: "#000",
    margin: 10,
  },
});
