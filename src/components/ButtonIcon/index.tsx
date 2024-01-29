import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { styles, colors } from './styles';

type Props = TouchableOpacityProps & {
  type? : 'PRIMARY' | 'SECONDARY',
  icon: keyof typeof MaterialIcons.glyphMap,

}

export function ButtonIcon( { icon, type = 'PRIMARY', ...rest } : Props ){

  return(
    <TouchableOpacity style={styles.container}
      {...rest}
    >
      <MaterialIcons
        name={icon}
        color={type === 'PRIMARY' ? colors.GREEN_500 : colors.RED}
        size={16}
      />  

    </TouchableOpacity>
  )
}