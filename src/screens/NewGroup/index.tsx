import { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    
    await groupCreate(group);
    
    navigation.navigate('players', { group });
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