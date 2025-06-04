import { useState } from 'react';
import { StatusBar, SafeAreaView, Image, View, TextInput, Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const Perfil = ({styles}) => {
    const navigation = useNavigation();

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")

    return (
        <>
            <SafeAreaView style={styles.perfilContainer}>
                <Text style={styles.h1}>PERFIL</Text>
                <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                placeholderTextColor="#888"
                onChangeText={(e) => setNombre(e)}
                value={nombre}
                />
                <TextInput
                style={styles.input}
                placeholder="Ingrese su teléfono"
                placeholderTextColor="#888"
                onChangeText={(e) => setTelefono(e)}
                value={telefono}
                />

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PerfilInfo', {nombre: nombre, telefono: telefono})}>
                    <Text style={styles.buttonText}>Actualizar Perfil</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default Perfil