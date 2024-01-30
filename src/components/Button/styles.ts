import { StyleSheet } from "react-native";
import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  containerColorPrimary:{
    width:'100%',
    minHeight: 56,
    maxHeight: 56,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GREEN_700,
    borderRadius: 6

  },
  containerColorSecondary:{
    width:'100%',
    minHeight: 56,
    maxHeight: 56,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.RED,
    borderRadius: 6

  },
  title:{
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.WHITE,

  }
})