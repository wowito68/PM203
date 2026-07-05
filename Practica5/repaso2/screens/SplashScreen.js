import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/bienvenida.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.appName}>repaso2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#E9F7F2',
    borderRadius: 70,
    height: 140,
    justifyContent: 'center',
    width: 140,
  },
  logo: {
    height: 92,
    width: 92,
  },
  title: {
    color: '#163B32',
    fontSize: 27,
    fontWeight: '800',
    marginTop: 24,
  },
  appName: {
    color: '#4D645E',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 7,
  },
});
