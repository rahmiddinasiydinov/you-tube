import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import {BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Main/>
    </BrowserRouter>
    </div>
    );
  }
  
  export default App;
  
  