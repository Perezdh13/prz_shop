
import Router from '../src/router/Router'
import fondo from '../src/assets/img/fondo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${fondo})`, width: "100%", height: "100vh", position:"fixed" }}>
      <Router />
    </div>
  );
}

export default App;
