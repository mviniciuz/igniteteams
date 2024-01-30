import { View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIcon } from "@components/ButtonIcon";

import { styles, colors } from './styles';

type Props = {
  name: string;
  onDelete: () => void;
}

export function PlayerCard({name, onDelete}: Props){

  return(   
    <View style={styles.container}>
      <MaterialIcons
        name={'person'}
        color={colors.GRAY_300}
        size={32}
      />
      <Text style={styles.name}>{name}</Text>
      <ButtonIcon
        icon={'close'}
        type={'SECONDARY'}
                 
      />
      
    </View>
  )

}