import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'
import './App.css';

import Comp from './Component'
function App() {
  return (
    <div className="App">
<Navbar dark color="primary">
<div className='container'>
  <NavbarBrand href="/">Ristorante con fuion</NavbarBrand>
</div>
</Navbar>
    </div>
  );
}

export default App;
