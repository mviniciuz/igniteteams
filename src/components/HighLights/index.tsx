import { View, Text } from "react-native";

import {styles} from './styles';

type Props = {
  title: string,
  subTitle: string
}

export function HighLights({title, subTitle}: Props){

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text></Text>
    </View>
  )
}