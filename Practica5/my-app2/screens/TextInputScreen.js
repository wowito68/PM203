import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput, //ari
  Alert,
  Button, 
  StyleSheet, //ari
  Platform,
} from "react-native";

if (Platform.OS === "web") {
  Alert.alert = (titular, mensaje, boton) => {
    const list = Array.isArray(mensaje) ? mensaje : boton;
    if (list) {
      if (window.confirm(titular)) list.find((b) => b.onPress)?.onPress();
    } else {
      window.alert(titular + (mensaje ? "\n" + mensaje : ""));
    }
  };
}

export default function App() {
  // regitro rapido de usuario
  // nombre, correo, contrasña

  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();
  const [contraseña, setContraseña] = useState();

  const registro = () => {
    // es una alerta simple
    if (!nombre || !correo || !contraseña) {                                           
      Alert.alert("Faltan datos", "Completa tos slos campos");                                           
      return;                                           
    }                                           
                                           
    if (!correo.includes("@") || !correo.includes(".com")) {                                           
      Alert.alert("Correo inválido", "El correo debe contener @ y .com");                                           
      return;                                           
    }                                           
                                           
    // validacion de contraseña                                           
    if (contraseña.length < 6) {                                           
      Alert.alert("Contraseña invalida", "Minimo 6 caracteres");                                           
      return;                                           
    }                                           
    // confirmacion de envio                                           
    Alert.alert(`Registrar ${nombre}`, [                                           
      {                                           
        text: "No",                                           
        style: "calcel",                                           
      },                                           
      {                                           
        text: "Si",                                           
        onPress: () => {                                           
          Alert.alert("Exito", `Usuario registrado con exito`);                                           
        },                                           
      },                                           
    ]);                                           
  };                                           

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.input}> //ARI
        <Text style={styles.Titulo}>Formulario de registro de usuario</Text> //ARI
        {/* nombre del usuario */}
        <TextInput                                                 //ARI
          style={styles.input}                            //ARI
          placeholder="Ingrese su nombre"                 //ARI
          placeholderTextColor="#999"                     //ARI
          autoCapitalize="words"                          //ARI
          value={nombre}                                  
          onChangeText={(texto) => setNombre(texto)}      
        />                                                //ARI
        <TextInput                                         //memo
          style={styles.input}                             //memo
          placeholder="Ingrese tu correo electronico"      //memo
          placeholderTextColor="#999"                     //memo
          keyboardType="email-address"                     //memo
          autoCapitalize="none"                            //memo
          value={correo}                                   
          onChangeText={(texto) => setCorreo(texto)}       
        />                                                 //memo
        <TextInput                                         //memo
          style={styles.input}                             //memo
          placeholder="Ingrese tu contraseña minimo 6 caracteres"       //memo
          placeholderTextColor="#999"                      //memo
          secureTextEntry={true}                           //memo
          value={contraseña}                               
          onChangeText={(texto) => setContraseña(texto)}   
        />                                                 //memo
        <Button title="Registrar" onPress={registro} />   //CRISTOPHER

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    ///ari
    flexGrow: 1, //ari
    backgroundColor: "#fff", //ari
    alignItems: "center", //ari
    justifyContent: "center", //ari
    flexDirection: "column", //ari
    padding: 24, //ari
    gap: 12, //ari
  }, //ari
  Titulo: {
    //ari
    padding: 30, //ari
    fontSize: 20, //ari
    alignContent: "stretch", //ari
  }, //ari
  input: {
    //ari
    borderWidth: 3, //ari
    borderColor: "#e6e6e6", //ari
    borderRadius: 3, //ari
    padding: 3, //ari
    fontSize: 15, //ari
    backgroundColor: "#ffffff", //ari
  }, ///ari
});