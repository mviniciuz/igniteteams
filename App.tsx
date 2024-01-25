import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import { Groups } from '@screens/Groups';
import { Header } from '@components/Header';

export default function App() {
  const [ fontsLoaded ] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
      <Header showBackButton/>
      {fontsLoaded ? <Groups /> : <Loading/>}   
    </>
  );
}


