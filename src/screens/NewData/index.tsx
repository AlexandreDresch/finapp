import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from '../../components/Header';
import { Picker } from '../../components/Picker/index.android';

import { styles } from './styles';

export function NewData() {
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');
  const [notes, setNotes] = useState([])

  async function findValues() {
   const result = await AsyncStorage.getItem('Income')
   console.log(result)
   if(result !== null) {
     AsyncStorage.setItem('Income', JSON.parse(result))
   }
  }

  useEffect(() => {
    findValues();
  },[])


  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(value)) || type === null) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type} - Valor: ${parseFloat(value)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleIncome()
        }
      ]
    )

  }



  async function handleIncome() {
    try {
      const note = { value: value }
      const updatedNotes = [...notes, note]
      setNotes(updatedNotes)
      AsyncStorage.setItem('Income', JSON.stringify(updatedNotes))
    } catch (error) {
      console.log(error);
    }
  }

  async function getData() {
    try {

      AsyncStorage.getItem('Income')
        .then(value => {
          if (value != null) {
            console.log(value);
          }
        }

        )

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />

        <SafeAreaView style={{ alignItems: 'center' }}>
          <TextInput
            style={styles.textInput}
            placeholder='Valor desejado'
            keyboardType='numeric'
            returnKeyType='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={(text) => setValue(text)}
          />

          <Picker onChange={setType} type={type} />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitText}>
              Registrar
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableOpacity
          onPress={getData}
        >
          <Text>
            TEST
          </Text>
        </TouchableOpacity>
      </View>

    </TouchableWithoutFeedback>
  );
}