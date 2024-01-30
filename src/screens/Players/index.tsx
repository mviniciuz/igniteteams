import { useState } from 'react';
import { View, FlatList} from 'react-native';
import { Header } from '@components/Header';
import { HighLights } from '@components/HighLights';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Button } from '@components/Button';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';

import { styles } from './styles';

export function Players(){
  const [teams, setTeams] = useState(['Time A', 'Time B']);
  const [activeTeam, setActiveTeam] = useState('Time A');
  const [players, setPlayers] = useState([
    'marcus', 
    'Patricia',
    'Murilo',
    'Patricia 01',
    'Patricia 02',
    'Patricia 04',
    'Patricia 05',
    'Patricia 06',
    'Patricia 07',
    'Patricia 08',
  ]);

  return(
    <View style={styles.container}>
      <Header showBackButton/>
      <HighLights
        title='Nome da turma'
        subTitle='Adicione a galera e separe os times'
      />
      <View style={styles.formInput}>
        <Input
          placeholder='     Nome do participante'
          autoCorrect={false}
        />
        <ButtonIcon icon='add'/>
      </View>
      
      <FlatList
        style={styles.listTeam}        
        keyExtractor={ item => item }
        data={teams}
        renderItem={( { item } )=>(
          <Filter
            title={item}
            isActive={ item === activeTeam ? true: false}
            onPress={() =>setActiveTeam(item)}                        
          />          
        )}
        horizontal      
      />

      <FlatList
        style={styles.listPlayer}      
        data={players}
        keyExtractor={ item => item}
        renderItem={ ( {item } )=>(
          <PlayerCard
            name={item}
            onDelete={() =>{}}
          />
        )}
        ListEmptyComponent={() =>(
          <ListEmpty
            message={'Não há jogadores na lista'}
          />
        )} 
        showsVerticalScrollIndicator={false}       
      />
      <Button
       title='Remover Jogador'
       type='secondary'
      />
    </View>
  )
}

