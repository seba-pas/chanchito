import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'

const addChanchito = () => {
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState(0);

  return (
    <View>
      <Text>Crear Chanchito</Text>
      <View>
        <Text>Nombre</Text>
        <TextInput
          placeholder="Inserte un nombre"
          onChangeText={(text) => setNombre(text)}
        />
      </View>
      <View>
        <Text>Monto</Text>
        <TextInput
          placeholder="Inserte un monto"
          onChangeText={(monto) => setMonto(monto)}
        />
      </View>
      <View>
        <TouchableOpacity><Text>Agregar</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default addChanchito;

const styles = StyleSheet.create({});
