import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    minHeight: 56,
    maxHeight: 56,
    width:'100%',
    borderRadius: 6,       
    backgroundColor: theme.COLORS.GRAY_700,
    color: theme.COLORS.GRAY_300,
    paddingLeft: 16,   
  },
})

export const colors = theme.COLORS;