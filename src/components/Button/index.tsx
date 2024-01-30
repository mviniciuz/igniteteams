import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string,
  type?: 'primary' | 'secondary',
}


export function Button( { title, type = 'primary', ...rest }: Props ){
  return(
    <TouchableOpacity style={ 
      type === 'primary'? styles.containerColorPrimary : styles.containerColorSecondary}
      { ...rest }
    >
      <Text style={styles.title}>{ title }</Text>
    </TouchableOpacity>
  )
}