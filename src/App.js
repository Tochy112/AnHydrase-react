import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './pages/Header';
import {useState} from 'react';
import data from './data.json';
import ToDoList from './pages/ToDoList';
import ToDoForm from './ToDoForm';
import List2 from './List2';
import List from './List';


  function App() {
  
    const [ toDoList, setToDoList ] = useState(data);
  
    const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
        return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
      });
      setToDoList(mapped);
    }
  
    const handleFilter = () => {
      let filtered = toDoList.filter(task => {
        return !task.complete;
      });
      setToDoList(filtered);
    }
  
    const addTask = (userInput ) => {
      let copy = [...toDoList];
      copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
      setToDoList(copy);
    }
  
    return (
      <div className="App">
        <div className='App-header'>
          {/* <Header /> */}
          {/* <ToDoForm addTask={addTask}/> */}
          {/* <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/> */}

          <List />
        </div>
       
      </div>
    );
  }
  
  export default App;