import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "./playerStorageDTO";
import { PLAYER_COLLECTION } from '@storage/storageConfig';


export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){

  try {
    
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, `${newPlayer}`);
    
  } catch (error) {
    throw error;
  }

}