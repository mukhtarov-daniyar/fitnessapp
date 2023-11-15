import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image, Animated } from "react-native";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  const fadeAnim = useRef(FitnessData.map(() => new Animated.Value(0))).current; 

  useEffect(() => {
    FitnessData.forEach((_, i) => {
      Animated.timing(fadeAnim[i], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: i * 300 
      }).start();
    });
  }, []);

  return (
    <View style={styles.container}>
      {FitnessData.map((item, key) => (
        <Animated.View
          key={key}
          style={[styles.card, { opacity: fadeAnim[key] }]}
        >
          <Pressable
            onPress={() => navigation.navigate("Workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })}
            style={styles.pressable}
          >
            <Image
              style={styles.image}
              source={{ uri: item.image }}
            />
            <Text style={styles.text}>
              {item.name}
            </Text>
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={24}
              color="white"
              style={styles.icon}
            />
          </Pressable>
        </Animated.View>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    width: '95%', // Установка ширины для корректного отображения
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: '100%', // Занимает всю ширину родительского элемента
    height: 140,
    borderRadius: 7,
  },
  text: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    left: 20,
    top: 20,
  },
  icon: {
    position: "absolute",
    bottom: 15,
    left: 20,
  },
  card: {
    width: '100%', // Установка ширины карточки на 100%
  }
});
