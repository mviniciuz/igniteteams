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
import { Loading } from '@components/Loading';

import { styles } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('newGroup');    
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', { group } )
  }

  async function fetchGroups(){
    try {
      
      setIsLoading(true);
      const storedGroups = await groupsGetAll();
      setGroups(storedGroups);
      setIsLoading(false);

    } catch (error) {
      throw error
    } finally {
      setIsLoading(false);
    }
  }
  
  useFocusEffect(useCallback(()=>{
    fetchGroups();
  },[]));  

  return ( 
    <SafeAreaView style={styles.container}>
      <Header />
      <HighLights
        title={'Teams'}
        subTitle={'Gaming with your friends'}
      />
      {isLoading? <Loading/>:    
        <FlatList
          keyExtractor={(item) => item}
          data={groups}
          renderItem={({item}) => (
            <GroupCard
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}  
          ListEmptyComponent={() => (
            <ListEmpty message='How about create your fisrt team?'/>
          )}      
        />
      }
      <Button
        title='Add new team'
        onPress={handleNewGroup}
      />
         
    </SafeAreaView>
  );
}