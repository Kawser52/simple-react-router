import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friend from './component/Friends/Friend';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="home" element={<Home/>}/>
       <Route path="About" element={<About/>}/>
       <Route path="friends" element={<Friend></Friend>}/>
       <Route exact path="/" element={<Home></Home>}/>
       <Route element={<NotFound></NotFound>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
