import logo from './logo.svg';
import './App.css';
import Landing from './views/Landing';
import Menu from './views/Menu';
import Cart from './views/Cart';
import Status from './views/Status';
import {Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landing" element={ <Landing /> }/>
        <Route path="/menu" element={ <Menu link="cart"/> }/>
        <Route path="/cart" element={ <Cart /> }/>
        <Route path="/status" element={ <Status /> }/>
        <Route path="*" element={<Navigate to="/landing"/>}/>
      </Routes>
    </div>
  );
}

export default App;
