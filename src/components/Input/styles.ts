import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    minHeight: 56,
    maxHeight: 56,
        
    backgroundColor: theme.COLORS.GRAY_700, 
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
   
    
  },
})

export const colors = theme.COLORS;