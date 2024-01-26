import { View } from 'react-native';

import { styles, colors } from './styles';

import { Header } from '@components/Header'
import { HighLights } from '@components/HighLights';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { UsersThree } from 'phosphor-react-native';


export function NewGroup(){
  return(
    <View style={styles.container}>
      <Header showBackButton/>
      <View style={styles.content}>
        <UsersThree
          color={colors.GREEN_500}
          size={56} 
          
        />
        <HighLights title='Nova Turma' subTitle='Crie uma turma para adicionar pessoas'/>
        <Input
          placeholder='Nome da Turma'
        />
        <Button title='Criar'/> 

      </View>
     
    </View>
  )
}