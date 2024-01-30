import { useState } from 'react';
import { View, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Header } from '@components/Header';
import { HighLights } from "@components/HighLights";
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { styles } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['turma01', 'turma02', 'turma03']);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('newGroup');    
  }

  return ( 
    <SafeAreaView style={styles.container}>
      <Header />
      <HighLights
        title={'Turmas'}
        subTitle={'Jogue com sua turma'}
      />
     
      <FlatList
        keyExtractor={(item) => item}
        data={groups}
        renderItem={({item}) => (
          <GroupCard title='Nome da turma' />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}  
        ListEmptyComponent={() => (
          <ListEmpty message='Que tal criar sua primeira turma?'/>
        )}
        
      />
      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
         
    </SafeAreaView>
  );
}