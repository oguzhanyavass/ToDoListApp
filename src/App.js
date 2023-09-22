import {useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {styles} from './App.styles';
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import ToDoCard from './components/ToDoCard';
import data from './data.json';

function App() {
  const [toDoList, setToDoList] = useState(data);

  return (
    <SafeAreaView style={styles.container}>
      <Header toDoList={toDoList} />
      <View style={styles.flatList}>
        <FlatList
          data={toDoList}
          renderItem={({item}) => (
            <ToDoCard
              work={item}
              toDoList={toDoList}
              setToDoList={setToDoList}
            />
          )}
          keyExtractor={item => item.title}
        />
      </View>
      <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
    </SafeAreaView>
  );
}

export default App;
