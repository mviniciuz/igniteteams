import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    height: 56,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_500,
    paddingLeft: 12,
    borderRadius: 6,
    marginBottom: 6,
    
  },
  name:{
    flex: 1,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.MD,    
    color: theme.COLORS.GRAY_300,
    marginLeft:12,
  }  
})

export const colors = theme.COLORS;