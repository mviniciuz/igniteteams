import { StyleSheet } from "react-native";
import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: theme.COLORS.GRAY_600,
  },
  formInput: {
    width:'100%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_600,
    padding: 12,    
  }
})