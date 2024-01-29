import { TextInput, TextInputProps } from "react-native";

import { styles, colors } from './styles';

export function Input({...rest}: TextInputProps ){

  return(
    <TextInput
      style={styles.input}
      placeholderTextColor={colors.GRAY_300}
      {...rest}
    /> 
  )
}