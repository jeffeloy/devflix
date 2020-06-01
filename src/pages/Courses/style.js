import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      "linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(138,138,138,1) 50%, rgba(207,206,206,1) 100%)",
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#7d8597",
  },
  title: {
    color: "#370617",
  },
});
