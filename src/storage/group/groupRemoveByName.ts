import AsyncStorage from "@react-native-async-storage/async-storage";

import {GROUP_COLLECTION, PLAYER_COLLECTION} from '@storage/storageConfig';

import {groupsGetAll} from '@storage/group/groupsGetAll';
import {playerGetByGroup} from '@storage/player/playerGetByGroup';

export async function groupRemoveByName(groupRemove: string){
  try {

   

    const storaged = await groupsGetAll();

    
    const groups = storaged.filter(group => group !== groupRemove);

    
    const storage = JSON.stringify(groups);
    console.log(storage);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupRemove}`);
        
  } catch (error) {
    throw error;
  }


}