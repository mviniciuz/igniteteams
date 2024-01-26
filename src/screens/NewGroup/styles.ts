import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    flex: 1,    
    backgroundColor: theme.COLORS.GRAY_600,
    justifyContent: 'center',
    
    paddingLeft: 16,
    paddingRight: 16
  },
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const colors = theme.COLORS;