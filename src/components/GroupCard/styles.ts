import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{    
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,

    backgroundColor: theme.COLORS.GRAY_500,  
   
  },
  title: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: theme.FONT_SIZE.MD,
    color: theme.COLORS.GRAY_100,
    padding:24,

    
  }
});

export const colors = theme.COLORS;