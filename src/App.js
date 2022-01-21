import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <NotFound></NotFound>
    </div>
  );
}

export default App;
