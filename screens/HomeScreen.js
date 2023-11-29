import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FitnessItems } from '../Context';
import FitnessCards from '../components/FitnessCards';
import Icon from 'react-native-vector-icons/FontAwesome'; // Убедитесь, что у вас установлен react-native-vector-icons

const HomeScreen = ({ navigation }) => {
  const { minutes, calories, workout, userName } = useContext(FitnessItems);

  return (
    <ScrollView style={styles.container}>
      {/* Верхнее окно с анкетой пользователя и иконкой */}
      <TouchableOpacity
        style={styles.profileHeader}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileText}>Анкета пользователя: {userName}</Text>
        <Icon name="user" size={24} color="white" style={styles.iconStyle} />
      </TouchableOpacity>

      {/* Основной контент */}
      <FitnessCards />

      {/* Нижнее окно */}
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Фитнесс приложение</Text>
        <View style={styles.infoBox}>
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>{workout}</Text>
            <Text style={styles.infoLabel}>Тренировки</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>{calories}</Text>
            <Text style={styles.infoLabel}>Калорий</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>{minutes}</Text>
            <Text style={styles.infoLabel}>Минут</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  profileHeader: {
    backgroundColor: "#00848C",
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconStyle: {
    marginLeft: 10,
  },
  infoContainer: {
    backgroundColor: "#00848C",
    padding: 10,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoValue: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  infoLabel: {
    color: "#D0D0D0",
    fontSize: 17,
    marginTop: 6,
  },
});
