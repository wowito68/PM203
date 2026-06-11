import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil
        nombre="Guillermo Alvarez Sanchez"
        carrera="ING Sistemas"
        materia="Programacion Movil"
        cuatrimestre="9no"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
