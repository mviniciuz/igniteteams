import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles, colors } from "./styles";
import {CaretLeft} from 'phosphor-react-native';

import logo from '@assets/logo.png';

type Props = {
  showBackButton?: boolean,
}

export function Header( { showBackButton = false } : Props){
  
  const navigate = useNavigation();

  function handleGoBack(){
    navigate.navigate('groups');    
  }  
 
  return(
    <View style={ styles.container }>
      {showBackButton &&
        <TouchableOpacity
          style={ styles.buttonBack }
          onPress={ handleGoBack } 

        >
           <CaretLeft color={ colors.WHITE } size={ 32 }/>
        </TouchableOpacity>
      }      
      <Image
        style={styles.image}
        source={logo}
      />
    </View>
  )
}
