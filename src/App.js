import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './pages/Header';
import {useState} from 'react';
import data from './data.json';
import ToDoList from './pages/ToDoList';


function App() {

  const [toDoList, setToDoList] = useState(data)   
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Header />  
        <ToDoList toDoList = {toDoList}/>       
      </header>
    </div>
  );
}

export default App;
