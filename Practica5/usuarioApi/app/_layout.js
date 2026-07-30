import { Stack } from "expo-router";


export default function RootLayout() {

    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="usuarios/[id]"
                options={{
                    title: "Detalles Usuario",
                    headerBackTitle: "Volver",
                }}
            />
            <Stack.Screen
                name="usuarios/editar/[id]"
                options={{
                    title: "Actualizar Usuario",
                    headerBackTitle: "Volver",
                }}
            />
        </Stack>
    );
}
