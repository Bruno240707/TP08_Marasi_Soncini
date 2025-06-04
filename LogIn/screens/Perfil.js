import { useState } from 'react';
import { StatusBar, SafeAreaView, Image, View, TextInput, Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const Perfil = ({styles}) => {

    return (
        <>
            <SafeAreaView style={styles.perfilContainer}>
                <Text style={styles.h1}>PERFIL</Text>
                <TextInput placeholder="Ingrese algo" style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mandar algo</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default Perfil