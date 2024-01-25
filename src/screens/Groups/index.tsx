import { useState } from 'react';
import { View, FlatList} from 'react-native';
import { Header } from '@components/Header';
import { HighLights } from "@components/HighLights";
import { GroupCard } from '@components/GroupCard';

import { styles } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da rockt', 'Galera da uniport', 'Galera do faturamento'])

  return (
    <View style={styles.container}>
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
        
      />

         
    </View>
  );
}