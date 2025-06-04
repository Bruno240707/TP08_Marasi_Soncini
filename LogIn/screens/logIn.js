import { useState } from 'react';
import { StatusBar, SafeAreaView, Image, View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const LogIn = ({ setIsLoggedIn, styles }) => {
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Image source={require('../assets/Loog.png')} style={styles.logo} />

        <View style={styles.inputContainer}>
          <Entypo name="user" size={20} style={styles.icon} />
          <TextInput
            placeholder="Company"
            style={styles.inputLogIn}
            value={company}
            onChangeText={setCompany}
          />
        </View>

        <View style={styles.inputContainer}>
          <Entypo name="lock" size={20} style={styles.icon} />
          <TextInput
            placeholder="Contraseña"
            style={styles.inputLogIn}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Iniciar Sesion</Text>
        </Pressable>

        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </SafeAreaView>
    </>
  );
};

export default LogIn;
