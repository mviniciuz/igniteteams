import { useState, useEffect, useRef } from 'react';
import { View, FlatList, Alert, TextInput} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroup } from '@storage/player/playerGetByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/playerStorageDTO';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@components/Header';
import { HighLights } from '@components/HighLights';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Button } from '@components/Button';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';


import { styles } from './styles';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';

type RouteParams = {
  group: string;
}

export function Players(){
  const [isLoading, setIsLoading] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const [teams, setTeams] = useState(['Team A', 'Team B']);
  const [activeTeam, setActiveTeam] = useState('Team A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>();

  const navigation = useNavigation();

  const route = useRoute();

  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer(){
    
    if(playerName.trim().length === 0){
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar');
    }

    try {
      const newPlayer = { 
        name: playerName,
        team: activeTeam,
      }

      await playerAddByGroup(newPlayer, group);
      
      newPlayerNameInputRef.current?.blur();    

      setPlayerName('');

      await playerGetByGroup(group);
      fechtPlayersByTeam();     

      
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Nova pessoa', error.message);
      } else {
        Alert.alert('Não foi possível adicionar uma nova pessoa');
      }
    }
  }

  async function handleRemovePlayer(playerName:string){
    try {
      await playerRemoveByGroup(playerName, group);
      fechtPlayersByTeam();
      
    } catch (error) {
      Alert.alert('remover pessoa', 'Não foi possível remover a pessoa selecionada')
    }
  }

  async function groupRemove(){
    try {
      await groupRemoveByName(group);
      navigation.navigate('groups');    
      
    } catch (error) {
      Alert.alert('Remover Grupo', 'Não é possível remover grupo');
    }
  }

  async function handleRemoveGroup(){
    Alert.alert('Remover Grupo', 'Deseja remover grupo?', [
      {
        text: 'Sim',
        onPress: () => groupRemove()  ,
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  async function fechtPlayersByTeam(){
    try {

      setIsLoading(true);

      const playersByTeam = await playerGetByGroupAndTeam(group, activeTeam);

      setPlayers(playersByTeam);

      setIsLoading(false);
      
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Loading Team', error.message);
      } else {
        Alert.alert('Loading Teams', 'Error to load Teams');
      }      
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    fechtPlayersByTeam();
  },[activeTeam])

  return(
    <SafeAreaView style={styles.container}>
      <Header showBackButton/>
      <HighLights
        title={group}
        subTitle='Add people in your team'
      />
      <View style={styles.formInput}>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder='Player name'
          autoCorrect={false}
          onChangeText={setPlayerName}
          value={playerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />
        <ButtonIcon
          icon='add'
          onPress={handleAddPlayer}
        />
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
      {isLoading ? <Loading/>:
        <FlatList
          style={styles.listPlayer}      
          data={players}
          keyExtractor={ item => item.name}
          renderItem={ ( { item } )=>(
            <PlayerCard
              name={item.name}
              onDelete={() => handleRemovePlayer(item.name)}
            />
          )}
          ListEmptyComponent={() =>(
            <ListEmpty
              message={'List players is empty'}
            />
          )}
          showsVerticalScrollIndicator={false}       
        />
      }
      <Button
       title='Remove team'
       type='secondary'
       onPress={handleRemoveGroup}   
      />
    </SafeAreaView>
  )
}

