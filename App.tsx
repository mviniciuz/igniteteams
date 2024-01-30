import { View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import { Routes } from './src/routes';

import { theme } from '@theme/theme';

export default function App() {
  const [ fontsLoaded ] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <View style={{flex:1, backgroundColor: theme.COLORS.GRAY_600}}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading/>}   
    </View>
  );
}


