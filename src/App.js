import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Array from './pages/array'
import New from './New'
import New2 from './New2';
import New3 from './New3';
import New4 from './New4';
import Header from './pages/Header';
import {useState, useEffect} from 'react';
import data from './data.json';
import ToDoList from './pages/ToDoList';


function App() {

  const [ToDolist, setToDolist] = useState(data)   
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <New /> */}
        {/* <New2 /> */}
        {/* <New3 /> */}
        {/* <New4 /> */}
        {/* <Array /> */}
      <Header />  
      <ToDoList />       
      </header>
    </div>
  );
}

export default App;
