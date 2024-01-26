import { StyleSheet } from "react-native";
import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  containerColorPrimary:{
    width:'100%',
    height: 50,
    maxHeight: 90,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GREEN_700,

  },
  containerColorSecondary:{
    width:'100%',
    height: 50,
    maxHeight: 90,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.RED,

  },
  title:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.WHITE,

  }
})