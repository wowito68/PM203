import { View, Text,Button } from 'react-native'
import React,{ useState } from 'react'

export const Perfil = (nombre,carrera,materia,cuatrimestre) => {
    const[mostrar,setMostrar] = useState(false)

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

            <Button title="Mostrar perfil" onPress={() => setMostrar(!mostrar)}></Button>
        </View>
    )
}


/*
import { View, Text,Button } from 'react-native'

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