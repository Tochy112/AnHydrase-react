import './App.css';
import Navbar from './Components/Navbar/Navbar'
import New from './New'
import New2 from './New2';
import New3 from './New3';
import New4 from './New4';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <New /> */}
        {/* <New2 /> */}
        {/* <New3 /> */}
        <New4 />
      </header>
    </div>
  );
}

export default App;
