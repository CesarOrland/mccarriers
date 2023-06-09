import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mc}>MC CARRIERS</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>INICIO DE SESIÓN</Text>
        <Text style={styles.subtitle}>Correo electrónico</Text>

        <View style={{ alignItems: "center" }}>
          <TextInput style={styles.input} placeholder="ejemplo@corre.com" />
        </View>
        <Text style={styles.subtitle}>Contraseña</Text>
        <View style={{ alignItems: "center" }}>
          <TextInput style={styles.input} placeholder="Ingresar contraseña" />
        </View>
        <TouchableOpacity style={{alignItems:"center", marginTop:"10%"}} onPress={() => navigation.navigate("Start")} >
          <View style={styles.button} >
            <Text style={styles.textInput} >Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFFFF"
  },
  header: {
    flex: 0.3,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  mc: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontStyle: "italic",
  },
  title: {
    marginTop: "10%",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: "5%",
    marginBottom: "3%",
  },
  subtitle: {
    fontSize: 18,
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "2%"
  },
  input: {
    width: "90%",
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#AEAEAE",
    paddingLeft: 10,
  },
  button:{
    width:"90%",
    height: 70,
    backgroundColor:"#003292",
    borderRadius: 50,
    alignItems:"center",
    justifyContent:"center"
  },
  textInput:{
    color:"#FFFFFF",
    fontSize: 22,
    fontWeight:"bold"
  }
});

export default Login;
