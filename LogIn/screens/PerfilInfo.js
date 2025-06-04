import { SafeAreaView, Text } from 'react-native';

const PerfilInfo = ({ styles, route }) => {
  const { nombre, telefono } = route.params;

  return (
    <SafeAreaView style={styles.perfilContainer}>
      <Text style={styles.h1}>PERFIL INFO</Text>
      <Text style={styles.h1}>Nombre: {nombre}</Text>
      <Text style={styles.h1}>Teléfono: {telefono}</Text>
    </SafeAreaView>
  );
};

export default PerfilInfo;
