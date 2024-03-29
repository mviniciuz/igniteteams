import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './playerStorageDTO';

export async function playerGetByGroup(group:string){
  
  const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

  const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

  return players;
}