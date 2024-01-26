import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
   fontFamily: theme.FONT_FAMILY.REGULAR,
   fontSize: theme.FONT_SIZE.MD,
   color: theme.COLORS.GRAY_300
  }
})