import { useState } from 'react';
import { StatusBar, SafeAreaView, Image, View, TextInput, Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const TiempoReal = ({styles}) => {

    return (
        <>
            <SafeAreaView style={styles.tiempoRealContainer}>
                <Text style={styles.h1}>ENTRADAS Y SALIDAS EN TIEMPO REAL</Text>
                <TextInput placeholder="Ingrese algo" style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mandar algo</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default TiempoReal