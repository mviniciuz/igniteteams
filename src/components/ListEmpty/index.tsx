import { View, Text } from "react-native";

import { styles } from './styles';

type Props = {
  message: string,
}

export function ListEmpty({message}: Props){

  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        {message}       
      </Text>
    </View>
  )
}