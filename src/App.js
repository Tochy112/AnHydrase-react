import './App.css';
import Navbar from './Components/Navbar/Navbar'
import New from './New'
import New2 from './New2';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <New />
        <New2 />
      </header>
    </div>
  );
}

export default App;
