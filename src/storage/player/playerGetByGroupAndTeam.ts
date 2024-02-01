import { playerGetByGroup } from "./playerGetByGroup";
import { PlayerStorageDTO } from './playerStorageDTO';
import { AppError } from "@utils/AppError";


export async function playerGetByGroupAndTeam(group: string, team: string){
  try {
    const storage = await playerGetByGroup(group);

    const players = storage.filter(player => player.teams === team);
  
    return players;
    
  } catch (error) {
    throw new AppError('Erro ao carregar grupos e times');        
  }
}