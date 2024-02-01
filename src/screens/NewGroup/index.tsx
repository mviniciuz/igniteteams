import { useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppError } from '@utils/AppError';

import { groupCreate } from '@storage/group/groupCreate';

import { styles, colors } from './styles';

import { Header } from '@components/Header'
import { HighLights } from '@components/HighLights';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { UsersThree } from 'phosphor-react-native'

export function NewGroup(){

  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleCreateNewGroup(){    
    try {

      if(group.trim().length === 0){
       return Alert.alert('Cadastro Novo', 'Informe um nome válido para a Turma!');
      }

      await groupCreate(group);
      navigation.navigate('players', { group });
      
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Cadastro Novo', error.message)
      } else {
        Alert.alert('Cadastro Novo', 'Não foi possível efetuar o cadastro');
      }            
    }  
  }



  return(
    <SafeAreaView style={styles.container}>
      <Header showBackButton/>
      <View style={styles.content}>
        <UsersThree
          color={colors.GREEN_500}
          size={56}           
        />
        <HighLights title='Nova Turma' subTitle='Crie uma turma para adicionar pessoas'/>
        <Input
          placeholder='Nome da Turma'
          onChangeText={setGroup}
        />
        <Button
          title='Criar'
          onPress={handleCreateNewGroup}
        /> 
      </View>     
    </SafeAreaView>
  )
}