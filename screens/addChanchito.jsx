import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChanchitoReducer } from "../redux/chanchitoSlice";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddChanchito = () => {
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const listChanchitos = useSelector((state) => state.chanchitos);
  console.log(listChanchitos);

  const agregarChanchito = async () => {
    const newChanchito = {
      id: Math.floor(Math.random() * 10000),
      nombre: nombre,
      monto: monto,
      descripcion: descripcion,
    };
    try {
      await AsyncStorage.setItem(
        "@Chanchitos",
        JSON.stringify([...listChanchitos, newChanchito])
      );
      dispatch(addChanchitoReducer(newChanchito));
      console.log("Saved correctly");
      navigation.navigate('Chanchitos');
    } catch (error) {
      console.log(error, "error en agregar chanchito");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Chanchito</Text>
      <Text style={styles.chanchi}>🐷</Text>

      <View style={styles.form}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            placeholder="Inserte un nombre"
            onChangeText={(text) => setNombre(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Monto:</Text>
          <TextInput
            placeholder="Inserte un monto"
            onChangeText={(monto) => setMonto(monto)}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Descripcion:</Text>
          <TextInput
            placeholder="Inserte una descripcion"
            onChangeText={(des) => setDescripcion(des)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.buttonCont}>
        <TouchableOpacity style={styles.button} onPress={agregarChanchito}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddChanchito;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
 
    height: "100%",
    backgroundColor: '#FFE5DE'
  },
  title: {
    fontSize: 32,
    alignSelf: "center",
    justifyContent: 'center',
    gontWeight: "900",
    marginVertical: 50,
    color: '#C3867F'
  },
  campo: {
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 10,
    marginHorizontal: 10
  },
  input: {
    backgroundColor: "transparent",
    marginLeft: 15,
    fontSize: 16,
  paddingRight: 20,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    borderBottomColor: '#C3867F',
    color: '#C3867F'
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
    color: '#C3867F',
    fontWeight: '700'
  },
  buttonCont: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 70
   
  },
  button: {
    width: 250,
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#C3867F",
    borderWidth: 2,
    borderColor: "#C3867F",
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 24,
  },
  form: {
    width: '90%',
    height: 230,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor:  "#fdbcb4",
  marginHorizontal: '5%',
    borderRadius: 6

  },
  chanchi: {
    marginTop: 0,
    fontSize: 60,
    alignSelf: 'center',
    marginBottom: 20
  }
});
