
import Router from '../src/router/Router'
import fondo from '../src/assets/fondo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './app/components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <img src={fondo} style={{width:"100%",height:"99vh"}}className="App-logo" alt="logo" />
        <Router />
    </div>
  );
}

export default App;
