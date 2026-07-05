import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import RegistroLibrosScreen from './screens/RegistroLibrosScreen';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setMostrarSplash(false);
    }, 2000);

    return () => clearTimeout(temporizador);
  }, []);

  return (
    <>
      <StatusBar style={mostrarSplash ? 'dark' : 'light'} />
      {mostrarSplash ? <SplashScreen /> : <RegistroLibrosScreen />}
    </>
  );
}
