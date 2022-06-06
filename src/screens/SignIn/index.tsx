import { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import theme from '../../global/theme';
import { styles } from './styles';
import { Button } from '../../components/Button';

export function SignIn() {
  const navigation = useNavigation<any>();

 
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  },[])

  function getData() {
    try {
      AsyncStorage.getItem('UserName')
      .then( value => {
        if(value != null){
          
          navigation.navigate('Página Inicial')
        }
      }
      )
    } catch (error) {
      console.log(error)
    }
  }

  async function setData() {
    if (name.length === 0) {
      alert('Por favor digite seu nome antes de continuar.')
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        console.log(name)
        navigation.navigate('Página Inicial')
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder='Digite seu nome'
            autoCorrect={false}
            autoCapitalize='none'
            placeholderTextColor={theme.colors.text}
            value={name}
            onChangeText={(text) => setName(text)}
          />


        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={setData}
        >
          <Text style={styles.submitText}>
            Entrar
          </Text>
        </TouchableOpacity>



      </View>
    </View>
  );
}