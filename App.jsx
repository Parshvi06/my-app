import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';

export default function App() {

  const [todolist, setTodolist] = useState([])
  const [inputText, setInputText] = useState('')

  const addNewTask=()=>{
    const newTask={text:inputText,completed:false};
    setInputText('');
    setTodolist([...todolist,newTask]);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <TextInput mode="outlined" onChangeText={setInputText}value={inputText} />
      <Button onPress={addNewTask} style={{ marginTop: 10 }} mode="contained">Add</Button>


      <ScrollView>
        {
          todolist.map((item, index) => {
            return <View key={index} style={styles.taskCard}>
              <Checkbox checked={item.completed}/>
              <Text style={styles.taskText}>{item.text}</Text>
            </View>

          })
        }
      </ScrollView>
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 50,
  },
  taskCard:{
    padding:10,
    borderRadius:10,
    marginVertical:5,
    borderWidth:1,
    borderColor:'#ccc',
    flexDirection:'row',
    alignItems:'center',


  },
  taskText:{
    fontSize:16,
    fontWeight:'bold',
  },
});
