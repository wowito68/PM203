import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

const Question = ({ label, value, onChange }) => (
  <View style={styles.questionRow}>
    <Text style={styles.questionText}>{label}</Text>
    <Switch
      ios_backgroundColor="#D7D7D7"
      onValueChange={onChange}
      thumbColor={value ? '#25ae0a' : '#F4F4F4'}
      trackColor={{ false: '#C9CDD2', true: '#15ff00' }}
      value={value}
    />
  </View>
);

export default function RegistroEventoScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {
    const nombreLimpio = nombre.trim();
    const carreraLimpia = carrera.trim();
    const semestreLimpio = semestre.trim();

    if (!nombreLimpio || !carreraLimpia || !semestreLimpio) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (!/^\d+$/.test(semestreLimpio)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    Alert.alert(
      'Registro enviado',
      [
        `Nombre: ${nombreLimpio}`,
        `Carrera: ${carreraLimpia}`,
        `Semestre: ${semestreLimpio}`,
        '',
        `Taller: ${taller ? 'Sí' : 'No'}`,
        `Constancia: ${constancia ? 'Sí' : 'No'}`,
        `Deportes: ${deportes ? 'Sí' : 'No'}`,
      ].join('\n'),
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.screen}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Registro de Evento Universitario</Text>

          <TextInput
            autoCapitalize="words"
            onChangeText={setNombre}
            placeholder="Nombre completo"
            placeholderTextColor="grey"
            returnKeyType="next"
            style={styles.input}
            value={nombre}
          />

          <TextInput
            autoCapitalize="words"
            onChangeText={setCarrera}
            placeholder="Carrera"
            placeholderTextColor="grey"
            returnKeyType="next"
            style={styles.input}
            value={carrera}
          />

          <TextInput
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={setSemestre}
            placeholder="Semestre"
            placeholderTextColor="grey"
            returnKeyType="done"
            style={styles.input}
            value={semestre}
          />

          <Text style={styles.sectionTitle}>Opciones</Text>

          <Question
            label="¿Asistirá al taller?"
            onChange={setTaller}
            value={taller}
          />
          <Question
            label="¿Requiere constancia?"
            onChange={setConstancia}
            value={constancia}
          />
          <Question
            label="¿Participará en deportes?"
            onChange={setDeportes}
            value={deportes}
          />

          <Text style={styles.author}>Guillermo Álvarez Sánchez</Text>

          <Pressable
            accessibilityRole="button"
            onPress={enviarRegistro}
            style={({ pressed }) => [
              styles.submitButton,
              pressed && styles.submitButtonPressed,
            ]}
          >
            <Text style={styles.submitButtonText}>Enviar Registro</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  scrollContent: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 34,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#171717',
    borderRadius: 2,
    borderWidth: Platform.OS === 'web' ? 4 : 0,
    elevation: 6,
    maxWidth: 430,
    paddingHorizontal: 14,
    paddingVertical: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    width: '100%',
  },
  title: {
    color: '#111111',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D6D6D6',
    borderRadius: 8,
    borderWidth: 1,
    color: '#171717',
    fontSize: 15,
    marginBottom: 14,
    minHeight: 46,
    paddingHorizontal: 12,
    paddingVertical: 11,
  },
  sectionTitle: {
    color: '#111111',
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 10,
    marginTop: 16,
  },
  questionRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 48,
  },
  questionText: {
    color: '#242424',
    flex: 1,
    fontSize: 14,
    paddingRight: 12,
  },
  author: {
    color: '#666666',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#170455',
    borderRadius: 7,
    marginTop: 22,
    paddingVertical: 14,
  },
  submitButtonPressed: {
    backgroundColor: '#9f7eff',
    opacity: 0.85,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
});
