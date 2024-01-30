import { StyleSheet } from "react-native";
import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  
  
  },

  containerActive: {
    height: 36,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.COLORS.GREEN_500,
  
  },


  title: {
    textTransform: 'uppercase',
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.SM,
    color: theme.COLORS.WHITE,
    textAlign: 'center'
  }
})