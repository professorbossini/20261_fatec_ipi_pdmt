import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text, 
  TextInput,
  View 
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'

interface Lembrete{
  id?: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState <Lembrete> ({texto: ''})
  const [lembretes, setLembretes] = useState <Lembrete[]> ([])
  const [emModoDeEdicao, setEmModoDeEdicao] = useState(false)

  const adicionar = () => {
    const novoLembrete : Lembrete = {id: Date.now().toString(), texto: lembrete.texto}
    setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
    setLembrete({texto: ''})
  }

  const remover = (lembrete: Lembrete) => {
    setLembretes(lembretesAtual => (
      lembretesAtual.filter((item) => item.id !== lembrete.id)
    ))  
  }

  const atualizar = () => {
    const lembretesAtualizados = lembretes.map( item =>{
      if(item.id === lembrete.id)
        return lembrete
      return item   
    })
    setLembretes(lembretesAtualizados)
    setEmModoDeEdicao(false)
    setLembrete({texto: ''})  
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        placeholder='Digite um lembrete...'
        value={lembrete.texto}
        onChangeText={(novoTexto) => setLembrete({id: lembrete.id, texto: novoTexto})}
      />
      <Pressable
        onPress={emModoDeEdicao ? atualizar : adicionar}
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          {emModoDeEdicao ? 'Atualizar lembrete' : 'Salvar lembrete'}
        </Text>
      </Pressable>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id!}
        data={lembretes}
        renderItem={({item}) => (
        <View style={styles.listItem}>
          <Text
            style={styles.listItemText}>
              {item.texto}
          </Text>
          <View
            style={styles.listItemButtons}>
            <Pressable
              onPress={() => remover(item)}>
              <AntDesign 
                name='delete'
                size={24}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setLembrete({id: item.id, texto: item.texto})
                setEmModoDeEdicao(true)
              }}>
              <AntDesign 
                name='edit'
                size={24}
              />
            </Pressable>
          </View>
        </View>
      )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4
  },
  list: {
    borderWidth: 1, 
    borderColor: 'gray', 
    width: '80%',
    borderRadius: 4,
    marginTop: 4,
    padding: 8
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBlockColor: 'gray',
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%'
  },
  listItemText: {
    textAlign: 'center',
    width: '70%'
  },
});
