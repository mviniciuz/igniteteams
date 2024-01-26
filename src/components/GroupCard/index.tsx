import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { UsersThree } from 'phosphor-react-native';

import { colors, styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string,
}

export function GroupCard({ title, ...rest }: Props){

  return(
    <TouchableOpacity style={styles.container}>
      <UsersThree
        size={32}
        color={colors.GREEN_500}
        weight="fill"  
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
