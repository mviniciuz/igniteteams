import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string,
  color?: 'primary' | 'secondary',
}

export function Button( { title, color = 'primary', ...rest }: Props ){
  return(
    <TouchableOpacity style={ color === 'primary'? styles.containerColorPrimary : styles.containerColorSecondary}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}