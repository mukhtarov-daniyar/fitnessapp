import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = ({ navigation }) => { // Правильное использование navigation как свойства
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('male');
    const [goal, setGoal] = useState('');
  
    const onSave = () => {
      Alert.alert("Подбор программы", "Подбираем программу тренировок для Вас", [
        {
          text: "OK",
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    };
  
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Данные клиента</Text>

      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Возраст"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Вес (кг)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Рост (см)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Цель тренировок"
        value={goal}
        onChangeText={setGoal}
        multiline
      />

      <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
      >
        <Picker.Item label="Мужской" value="male" />
        <Picker.Item label="Женский" value="female" />
      </Picker>

      <View style={styles.buttonContainer}>
        <Button title="Сохранить" onPress={onSave} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1, // Для занятия всего доступного пространства
    justifyContent: 'flex-end', // Выравнивание содержимого внизу
    width: '100%',
    paddingBottom: 20, 
  },
  button: {
    backgroundColor: '#0000FF', // Синий цвет фона
    padding: 10,
    borderRadius: 0, // Квадратная форма
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Белый цвет текста
    fontSize: 18,
  },
});

export default ProfileScreen;
