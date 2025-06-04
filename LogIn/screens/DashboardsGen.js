import { useState } from 'react';
import { StatusBar, SafeAreaView, Image, View, TextInput, Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const DashboardsGen = ({styles}) => {

    return (
        <>
            <SafeAreaView style={styles.dashboardsGenContainer}>
                <Text style={styles.h1}>DASHBOARDS GENERALES</Text>
                <TextInput placeholder="Ingrese algo" style={styles.input} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Mandar algo</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>

    )
}

export default DashboardsGen