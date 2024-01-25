import { StyleSheet } from "react-native";
import { theme } from "@theme/theme";

export const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height: 120,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_600,
    paddingTop: 60
  },
  image: {
    height: 45,
    width: 45,
  },
  buttonBack:{
    flex:1,
  

  }
})

export const colors = theme.COLORS;