import { View} from 'react-native';
import { Header } from '@components/Header';
import { HighLights } from '@components/HighLights';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';

import { styles } from './styles';

export function Players(){

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
      <Filter isActive  title='Time A'/>

    </View>
  )
}

