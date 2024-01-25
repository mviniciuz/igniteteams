import { View, Image, TouchableOpacity } from "react-native";
import { styles, colors } from "./styles";
import {CaretLeft} from 'phosphor-react-native';


import logo from '@assets/logo.png';

type Props = {
  showBackButton?: boolean,
}

export function Header({showBackButton = false}: Props){
  return(
    <View style={styles.container}>
      {showBackButton &&
        <TouchableOpacity style={styles.buttonBack}>
           <CaretLeft color={colors.WHITE} size={32}/>
        </TouchableOpacity>
      }      
      <Image source={logo}/>
    </View>
  )
}
