import { Alert } from "react-native";
import { API_URL, LOGIN } from "./constans";


export const getLogin = (loginInput, navigation) => {
    console.log(loginInput);
    return async (dispatch) => {
        console.log("EBTRA")
      // don't forget to use dispatch here!
      const response = await fetch(`${API_URL}user/login`, {
        method: "POST",
        headers: {
          // these could be different for your API call
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInput),
      });
      console.log("PASAAAAA")
      const data = await response.json();
      console.log(data);
      if(data.status == "error"){
        Alert.alert("Verifique su email y contraseña")
      }
      if(data.admin == true) {
        navigation.navigate("StartAdmin")
      } else {
        navigation.navigate("Start")
      }
      dispatch({
        type: LOGIN,
        payload: data,
      });
    };
  };