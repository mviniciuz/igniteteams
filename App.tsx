import { StatusBar } from 'expo-status-bar';

import { Groups } from '@screens/Groups';

export default function App() {
  return (
    <>
      <StatusBar 
        style="light"
        backgroundColor='transparent'
        translucent
      />
      <Groups />   
    </>
  );
}


