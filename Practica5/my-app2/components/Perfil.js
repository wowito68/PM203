import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {
    const [mostrar, setMostrar] = useState(false)

    return (
        <View style={styles.tarjeta}>
            <Text style={styles.nombre}>Hola {nombre}</Text>

            {/* Renderizado condicional */}
            {mostrar &&
                <> 
                    <Text style={styles.carrera}>Carrera: {carrera}</Text>
                    <Text style={styles.otroTexto}>Materia: {materia}</Text>
                    <Text style={styles.otroTexto}>Cuatrimestre: {cuatrimestre}</Text>
                </>
            }

            <Button
                title={mostrar ? 'Ocultar perfil' : 'Mostrar perfil'}
                onPress={() => setMostrar(!mostrar)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
nombre: {
    fontSize: 24,
    fontWeight: 600,
    textTransform: 'uppercase',
},
carrera: {
    fontSize: 18,
    color: 'blue',
    fontFamily: 'Roboto',
},
otroTexto: {
    fontSize: 12,
    fontFamily: 'Courier',
    fontStyle: 'italic',
},
tarjeta: {
    borderWidth:2,
    padding:25,
    margin:15,}
})