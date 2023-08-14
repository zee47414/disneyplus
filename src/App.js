import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
       <Routes>
        <Route  path='/' element = {<Login />}/>
        <Route path='/home' element = {<Home />}/>
        <Route path='/detail/:id' element = {<Detail />} />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
