
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { HistoryList } from '../../components/HistoryList';

import { styles } from './styles';
import theme from '../../global/theme';


export function Home() {
  const navigation = useNavigation<any>();

  const [name, setName] = useState('');
  const [history, setHistory] = useState([
    {key: '1', type: 'receita', value: 1000.00},
    {key: '2', type: 'despesa', value: 100.00},
    {key: '3', type: 'receita', value: 50.10},
    {key: '4', type: 'receita', value: 10.50},
    {key: '5', type: 'despesa', value: 780.25},
  ])

  useEffect(() => {
    getData();
  }, [])

  function getData() {
    try {
      AsyncStorage.getItem('UserName')
        .then(value => {
          if (value != null) {
            setName(value);
          }
        }
        )
    } catch (error) {
      console.log(error)
    }
  }

  async function updateData() { // atualiza o nome
    if (name.length === 0) {
      alert('Por favor digite seu nome antes de continuar.')
    } else {
      try {
        await AsyncStorage.setItem('UserName', name)
        alert('Seu nome foi atualizado com sucesso!')
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function removeData() { // remove o nome
    if (name.length === 0) {
      alert('Por favor digite seu nome antes de continuar.')
    } else {
      try {
        await AsyncStorage.removeItem('UserName') // usar .clear() para apagar tudo
          .then(() => {
            setName('')
          })
        navigation.navigate('Cadastrar/Mudar Nome')
        alert('Nome apagado com sucesso!')
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.dataContainer}>
        <Text style={styles.greetings}>
          Bem vindo, {name}
        </Text>

        <Text style={styles.balance}>
          R$ 100,00
        </Text>
      </View>

      <Text style={styles.title}>
        Últimas movimentações
      </Text>

      <FlatList 
        style={styles.list}
        data={history}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <HistoryList data={item}/>
        )}
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
        onPress={updateData}
      >
        <Text>
          Trocar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={removeData}
      >
        <Text>
          Deletar
        </Text>
      </TouchableOpacity>
    </View>
  );
}