import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {
    const [mostrar, setMostrar] = useState(false)

    return (
        <View>
            <Text>Hola {nombre}</Text>

            {/* Renderizado condicional */}
            {mostrar &&
                <> 
                    <Text>Carrera: {carrera}</Text>
                    <Text>Materia: {materia}</Text>
                    <Text>Cuatrimestre: {cuatrimestre}</Text>
                </>
            }

            <Button
                title={mostrar ? 'Ocultar perfil' : 'Mostrar perfil'}
                onPress={() => setMostrar(!mostrar)}
            />
        </View>
    )
}

/*
Ejemplo recibiendo props como objeto:

export const Perfil = (props) => {
    return (
        <View>
            <Text>Hola {props.nombre}</Text>
            <Text>Carrera: {props.carrera}</Text>
            <Text>Materia: {props.materia}</Text>
            <Text>Cuatrimestre: {props.cuatrimestre}</Text>
        </View>
    )
}
*/
