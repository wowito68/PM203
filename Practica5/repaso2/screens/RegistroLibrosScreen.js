import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function RegistroLibrosScreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);
  const temporizador = useRef(null);

  useEffect(() => {
    return () => clearTimeout(temporizador.current);
  }, []);

  const agregarLibro = () => {
    const tituloLimpio = titulo.trim();
    const autorLimpio = autor.trim();
    const generoLimpio = genero.trim();

    Keyboard.dismiss();

    if (!tituloLimpio || !autorLimpio || !generoLimpio) {
      Alert.alert('Campos incompletos', 'Todos los campos son obligatorios.');
      return;
    }

    setCargando(true);

    temporizador.current = setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: tituloLimpio,
        autor: autorLimpio,
        genero: generoLimpio,
      };

      setLibros((listaActual) => [...listaActual, nuevoLibro]);
      setTitulo('');
      setAutor('');
      setGenero('');
      setCargando(false);
      Alert.alert('Libro agregado', 'Libro guardado correctamente.');
    }, 4000);
  };

  const renderLibro = ({ item }) => (
    <View style={styles.bookCard}>
      <Text style={styles.bookTitle}>{item.titulo}</Text>
      <Text style={styles.bookDetail}>Autor: {item.autor}</Text>
      <Text style={styles.bookDetail}>Género: {item.genero}</Text>
    </View>
  );

  const formulario = (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Registro de Libros Leídos</Text>
        <Text style={styles.subtitle}>Crea tu catálogo personal</Text>
        <Text style={styles.author}>Isc. Iván Isay Guerra López</Text>
      </View>

      <View style={styles.formCard}>
        <TextInput
          autoCapitalize="sentences"
          editable={!cargando}
          onChangeText={setTitulo}
          placeholder="Título del libro"
          placeholderTextColor="#697873"
          returnKeyType="next"
          style={styles.input}
          value={titulo}
        />
        <TextInput
          autoCapitalize="words"
          editable={!cargando}
          onChangeText={setAutor}
          placeholder="Autor"
          placeholderTextColor="#697873"
          returnKeyType="next"
          style={styles.input}
          value={autor}
        />
        <TextInput
          autoCapitalize="words"
          editable={!cargando}
          onChangeText={setGenero}
          onSubmitEditing={agregarLibro}
          placeholder="Género"
          placeholderTextColor="#697873"
          returnKeyType="done"
          style={styles.input}
          value={genero}
        />

        <Pressable
          accessibilityRole="button"
          disabled={cargando}
          onPress={agregarLibro}
          style={({ pressed }) => [
            styles.addButton,
            cargando && styles.addButtonDisabled,
            pressed && !cargando && styles.addButtonPressed,
          ]}
        >
          {cargando ? (
            <View style={styles.loadingRow}>
              <ActivityIndicator color="#FFFFFF" size="small" />
              <Text style={styles.addButtonText}>Guardando...</Text>
            </View>
          ) : (
            <Text style={styles.addButtonText}>Agregar libro</Text>
          )}
        </Pressable>
      </View>

      <Text style={styles.total}>Total de libros: {libros.length}</Text>
    </View>
  );

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../assets/fondo-libros.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <FlatList
            automaticallyAdjustKeyboardInsets
            contentContainerStyle={styles.listContent}
            data={libros}
            keyboardShouldPersistTaps="handled"
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <View style={styles.emptyCard}>
                <Text style={styles.emptyText}>
                  Aún no has agregado libros.
                </Text>
              </View>
            }
            ListHeaderComponent={formulario}
            renderItem={renderLibro}
            showsVerticalScrollIndicator={false}
          />
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(5, 20, 16, 0.42)',
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  listContent: {
    alignSelf: 'center',
    maxWidth: 620,
    paddingBottom: 34,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 62 : 48,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 18,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.65)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    color: '#E9F4EF',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
  },
  author: {
    color: '#D7E6E0',
    fontSize: 12,
    marginTop: 6,
  },
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    borderColor: 'rgba(255, 255, 255, 0.38)',
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderColor: '#D4DDD9',
    borderRadius: 9,
    borderWidth: 1,
    color: '#14251F',
    fontSize: 15,
    marginBottom: 10,
    minHeight: 46,
    paddingHorizontal: 13,
    paddingVertical: 11,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: '#3E18CE',
    borderRadius: 9,
    justifyContent: 'center',
    minHeight: 47,
    paddingHorizontal: 16,
  },
  addButtonPressed: {
    backgroundColor: '#2D0DAB',
    opacity: 0.9,
  },
  addButtonDisabled: {
    backgroundColor: '#81898A',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  loadingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  total: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 11,
    marginTop: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  bookCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderLeftColor: '#3E18CE',
    borderLeftWidth: 5,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  bookTitle: {
    color: '#17241F',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 5,
  },
  bookDetail: {
    color: '#3D4C46',
    fontSize: 13,
    lineHeight: 19,
  },
  emptyCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    borderRadius: 10,
    padding: 18,
  },
  emptyText: {
    color: '#43534D',
    fontSize: 14,
    fontWeight: '600',
  },
});
