import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { GROUP_COLLECTION } from "../storageConfig";

import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup:string){
  try {

    const storedGroups = await groupsGetAll();

    const storeAlreadyExist = storedGroups.includes(newGroup);

    if(storeAlreadyExist){
      throw new AppError('Já existe um grupo cadastrador com esse nome!');
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    
  } catch (error) {
    throw error
  }
}