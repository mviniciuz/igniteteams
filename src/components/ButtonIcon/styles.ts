import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container: {
    height:56,
    width:56,
    backgroundColor: theme.COLORS.GRAY_700,

    justifyContent: 'center',
    alignItems: 'center',
    
    borderTopRightRadius: 6,
    borderBottomRightRadius:6,
    
  }
})

export const colors = theme.COLORS;