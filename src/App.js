import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friend from './component/Friends/Friends';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Routes>
       <Route path="home" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="friends" element={<Friend></Friend>}/>
       <Route exact path="/" element={<Home></Home>}/>
       <Route path = "*" element={<NotFound></NotFound>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
