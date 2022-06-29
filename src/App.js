import './App.css';
import Navbar from './Components/Navbar/Navbar'
import List2 from './List2';
import List from './List';
import Form from './form'
import Form2 from './Form2'
import Response from './Response'
import Blog from './Blog'
import {BrowserRouter, Routes, Route} from "react-router-dom";



  function App() {
  
    return (
      <div className="App">
        <div className='App-header'>

          {/* <List /> */}

          {/* <Form /> */}
          {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form2 />}/>
                <Route path="/response" element={<Response />}/>             
            </Routes>
          </BrowserRouter> */}
         
         <Blog />
        

          
        </div>
       
      </div>
    );
  }
  
  export default App;