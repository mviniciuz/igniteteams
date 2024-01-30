import { StyleSheet } from "react-native";

import { theme } from '@theme/theme';

export const styles = StyleSheet.create({
  container:{
    flex:1,    
    backgroundColor: theme.COLORS.GRAY_600,
    padding: 12,
  },  
  listTeam:{   
    maxHeight: 56,
  },
  listPlayer:{   
    flex: 1,
  
  },
  formInput: {
    height: 56,
    width:'100%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_700,    
    borderRadius: 6,
    marginBottom :12,
  }
})