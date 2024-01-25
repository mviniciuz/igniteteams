import { View, ActivityIndicator } from "react-native";
import { styles, colors} from "./styles";


export function Loading(){

  return(
    <View style={styles.container}>
      <ActivityIndicator color={colors.GRAY_700}/>
    </View>
  )
}