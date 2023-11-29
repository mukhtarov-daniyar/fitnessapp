import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const AuthScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');

  const handleStartTraining = () => {
    // Здесь можно добавить логику обработки введенных данных
    // Переход на HomeScreen
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введите ваше имя"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Введите ваш возраст"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Введите ваш вес"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
      >
        <Picker.Item label="Мужской" value="male" />
        <Picker.Item label="Женский" value="female" />
      </Picker>
      <Button title="Начать тренировку" onPress={handleStartTraining} />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
});
