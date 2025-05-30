import { useState } from 'react';
import { StatusBar, SafeAreaView, Image, View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const LogIn = ({ setIsLoggedIn }) => {
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
            style={styles.input}
            value={company}
            onChangeText={setCompany}
          />
        </View>

        <View style={styles.inputContainer}>
          <Entypo name="lock" size={20} style={styles.icon} />
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginBottom: 100,
    width: '45%',
    height: '20%',
    borderRadius: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1359BF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    width: '90%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#29426B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#3C49D2',
    fontSize: 13,
  },
});

export default LogIn;
