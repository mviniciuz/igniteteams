import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  input: {
    minHeight: 56,
    maxHeight: 56,

    width: '100%',
    backgroundColor: theme.COLORS.GRAY_700,
    borderRadius: 6,
    padding: 16,
    marginBottom: 12,
    
  },
})

export const colors = theme.COLORS;