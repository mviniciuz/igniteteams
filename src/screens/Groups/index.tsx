import { useState, useCallback } from 'react';
import { FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Header } from '@components/Header';
import { HighLights } from "@components/HighLights";
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { styles } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('newGroup');    
  }

  async function letchGroups(){
    try {
      const storedGroups = await groupsGetAll();
      setGroups(storedGroups);

    } catch (error) {
      throw error
    }
  }
  
  useFocusEffect(useCallback(()=>{
    letchGroups();
  },[]));
  

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
          <GroupCard title={item} />
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