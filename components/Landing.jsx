import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.fondo}>
        <View style={styles.bannerContainer}>
          <View style={styles.recuadro}>
            <Text style={styles.quizz}>Chanchito </Text>
            <Text style={styles.time}>🐷</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.buttonHome}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    paddingTop: 40,
    paddingHorizontral: 20,
    backgroundColor: "#fdbcb4",
  },
  statusBar: {
    color: "white",
  },
  fondo: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fdbcb4",
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",

    flex: 1,
  },

  buttonHome: {
    width: "80%",
    backgroundColor: "#fdbcb4",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "900",
    color: "white",
  },
  buttonContainer: {
    felx: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",

    marginBottom: 30,

    bottom: 0,
  },
  recuadro: {
    borderRadius: 20,
    backgroundColor: "#fdbcb4",
    height: 250,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  quizz: {
    color: "white",
    fontWeight: "700",
    fontSize: 60,
    marginBottom: 40
  },
  time: {
    color: "#F68E5F",
    fontWeight: "700",
    fontSize: 90,
  },
});
