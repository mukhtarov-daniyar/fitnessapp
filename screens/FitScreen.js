import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../Context";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];

  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout,
  } = useContext(FitnessItems);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: current.image }}
      />

      <Text style={styles.excersiseName}>
        {current.name}
      </Text>

      <Text style={styles.excersiseSets}>
        x{current.sets}
      </Text>

      {/* Кнопка "Назад" */}
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>
          Назад
        </Text>
      </Pressable>

      {/* Кнопка "Далее" или "Выполнено" */}
      {index + 1 >= excersise.length ? (
        <Pressable
          style={styles.doneButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Выполнено</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.nextButton}
          onPress={() => {
            setIndex(index + 1);
            navigation.navigate("Rest");
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
          }}
        >
          <Text style={styles.buttonText}>Далее</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: "100%",
    height: 370
  },
  excersiseName: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  excersiseSets: {
    marginTop: 30,
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center"
  },
  backButton: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 100,
    marginTop: 30,
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  doneButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
    width: 150,
    alignItems: 'center'
  },
  nextButton: {
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
    width: 150,
    alignItems: 'center'
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default FitScreen;

