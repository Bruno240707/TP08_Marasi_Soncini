import Perfil from "./Perfil"

const PerfilInfo = ({styles, nombre, telefono}) => {
    return (
        <>
            <SafeAreaView style={styles.perfilContainer}>
                <Text style={styles.h1}>PERFIL INFO</Text>
                
            </SafeAreaView>
        </>
    )
}

export default PerfilInfo