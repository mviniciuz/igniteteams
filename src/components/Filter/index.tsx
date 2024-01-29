import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string,
  isActive?: boolean
}

export function Filter({title, isActive = false, ...rest}: Props){

  return(
    <TouchableOpacity
      style={isActive ? styles.containerActive: styles.container}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}