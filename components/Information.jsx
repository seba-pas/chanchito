import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setDineroReducer, getDineroReducer } from "../redux/chanchitoSlice";

const Information = () => {  
  const [dinero, setDinero] = useState(0)
  const [valor, setValor] = useState(0);
  const dineroDisponible = useSelector((state) => state.dinero)
  const dispatch = useDispatch();



  const dineroRestante = dinero - dineroDisponible.plata
  let esto = dineroRestante?dineroRestante: 0

  function moneyHandler() {
    setDinero(valor);
    const money = {
      plata: valor - esto,
    };
    dispatch(setDineroReducer(money));
  }


  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.titulo}>Dinero disponible</Text>
        <Text style={styles.dinero}>${dinero}</Text>
      </View>

      <View style={styles.actualizar}>
        <Text style={styles.leyenda}>
          Actualizá tu Dinero disponible para ahorrar
        </Text>
        <TextInput
          placeholder="Inserte su monto disponible"
          onChangeText={(valor) => setValor(valor)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={moneyHandler}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.titulo}>Dinero no asignado </Text>
        <Text style={styles.dinero}>${dineroRestante?dineroRestante: dinero}</Text>
      </View>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    height: "100%",
    backgroundColor: "#FFE5DE",
  },
  information: {
    justifyContent: "center",
    alignItems: "center",
    color: "#C3867F",
  },
  dinero: {
    marginTop: 20,
    fontWeight: "800",
    fontSize: 40,
    color: "#C3867F",
  },
  titulo: {
    fontSize: 30,
    color: "#C3867F",
  },
  actualizar: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    color: "#C3867F",
  },
  leyenda: {
    fontSize: 18,
    color: "#C3867F",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    width: 250,
    height: 50,
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
  input: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    width: 150,
    color: "#C3867F",
    fontWeight: "400",
  },
});
