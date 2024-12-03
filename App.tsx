import { LoadIndicator } from './src/components/loading/styles';
import { Routes }  from './src/routes';
import { useFonts, Sora_400Regular, Sora_700Bold } from '@expo-google-fonts/sora';

export default function App() {
  const [fontsLoaded] = useFonts({ Sora_400Regular, Sora_700Bold});

  if(!fontsLoaded){
    return (
      <LoadIndicator />
    );
    
  }

  return (
    <Routes /> 
 );
}36