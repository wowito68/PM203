// zona1: importaciones de componetes y archivos

import { StatusBar } from 'expo-status-bar'; //puede ser opcion quitarlo o no
import { StyleSheet, Text, View } from 'react-native';

import { Perfil } from './components/Perfil';

// zona2 main: hogar de los componetes
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil estiloExt={styles.tarjetaRoja}
        nombre="Guillermo Alvarez Sanchez"
        carrera="ING Sistemas"
        materia="Programacion Movil"
        cuatri="9no">

      </Perfil>
      <Perfil estiloExt={styles.tarjetaVerde}
        nombre="Guillermo Alvarez Sanchez"
        carrera="ING Sistemas"
        materia="BD"
        cuatri="9no">

      </Perfil>
      <StatusBar style="auto" />
      <Perfil estiloExt={styles.tarjetaRoja}
        nombre="Guillermo Alvarez Sanchez"
        carrera="ING Sistemas"
        materia="Programacion Movil"
        cuatri="9no">

      </Perfil>

    </View>
  );
}

// Zona 3 Estilos y Posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },

  tarjetaRoja: {
    backgroundColor: '#FF6B6B',
  },

  tarjetaVerde: {
    backgroundColor: '#6BCB77',
  }
});
