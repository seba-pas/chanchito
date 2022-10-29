import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { allChanchitos, getDineroReducer, setDineroReducer } from "../redux/chanchitoSlice";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Chanchitos = ({ navigation }) => {
  const dispatch = useDispatch();
  const chanchis = useSelector((state) => state.chanchitos);
  const isFocused = useIsFocused();
  const platita = useSelector((state) => state.dinero);

  console.log("esto es platita", platita.plata);


  useEffect(() => {
    dispatch(getDineroReducer())
  },[])



  function handleAssign(money) {
    let chanchiMoney = {
      plata: platita.plata - money,
    };
    dispatch(setDineroReducer(chanchiMoney));
    console.log("monto actualizado correctamente");
  }

  const show = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Chanchitos</Text>
      <View>
        <ScrollView style={styles.scroll}>
          {isFocused && chanchis ? (
            chanchis?.map((e) => {
              return (
                <View key={e.id} style={styles.chanchi}>
                  <Text style={styles.avatar}>🐷</Text>
                  <Text style={styles.nombre}>
                    {e.nombre.charAt(0).toUpperCase() + e.nombre.slice(1)}
                  </Text>

                  <Text style={styles.monto}>${e.monto.toString()}</Text>
                  <Text style={styles.descripcion}>{e.descripcion}</Text>
                  {platita.plata >= e.monto ? (
                    <View>
                      {" "}
                      <Text>Puedes {e.descripcion}</Text>{" "}
                    </View>
                  ) : (
                    <View></View>
                  )}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={()=> handleAssign(e.monto)}
                  >
                    <Text style={styles.buttonText}>Asignar Dinero</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <View>
              <Text>"No hay chanchis"</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Chanchitos;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE5DE",
    height: "100%",
    paddingBottom: 120,
  },
  buttonText: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
  },
  scroll: {
    height: "200%",
  },
  title: {
    fontSize: 40,
    alignSelf: "center",
    justifyContent: "center",
    gontWeight: "900",
    marginTop: 60,
    marginBottom: 30,
    color: "#C3867F",
  },
  avatar: {
    paddingTop: 0,
    justifyContent: "center",
    alignItems: "center",

    fontSize: 45,
  },
  nombre: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "center",
  },
  monto: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    alignSelf: "center",
  },
  chanchi: {
    height: 180,
    width: 300,
    backgroundColor: "#fdbcb4",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    marginVertical: 20,
    paddingVertical: 5,

    borderRadius: 10,
  },
  descripcion: {
    color: "#C3867F",
    fontSize: 22,
    fontWeight: "800",
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
});
