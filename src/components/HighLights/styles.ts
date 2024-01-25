import { StyleSheet } from "react-native";
import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_600,
    paddingTop: 25
  },
  title: {
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.WHITE,    
    fontSize: theme.FONT_SIZE.XL
  },
  subTitle: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: theme.COLORS.GRAY_300,    
    fontSize: theme.FONT_SIZE.MD
  }

})