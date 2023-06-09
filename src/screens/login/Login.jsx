import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../../redux/actions";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("admin@admin.com"); // hola2@hola.com
  const [password, setPassword] = useState("12345678"); //12345678
  const { login } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleLogin = () => {
    let user = {
      password: password,
      email: username,
    };
    dispatch(getLogin(user, navigation));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mc}>MC CARRIERS</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>INICIO DE SESIÓN</Text>
        <Text style={styles.subtitle}>Correo electrónico</Text>

        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.input}
            placeholder="ejemplo@corre.com"
            onChangeText={setUsername}
            value={username.toLowerCase()}
          />
        </View>
        <Text style={styles.subtitle}>Contraseña</Text>
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.input}
            placeholder="Ingresar contraseña"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <TouchableOpacity
          style={{ alignItems: "center", marginTop: "10%" }}
          onPress={() => handleLogin()}
        >
          <View style={styles.button}>
            <Text style={styles.textInput}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    marginBottom: "2%",
  },
  input: {
    width: "90%",
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#AEAEAE",
    paddingLeft: 10,
  },
  button: {
    width: "90%",
    height: 70,
    backgroundColor: "#003292",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Login;
