import { TextInput, TextInputProps } from "react-native";

import { styles, colors } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({inputRef, ...rest}: Props ){

  return(
    <TextInput
      ref={inputRef}
      style={styles.input}
      placeholderTextColor={colors.GRAY_300}      
      {...rest}
    /> 
  )
}