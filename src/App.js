import logo from './logo.svg';
import './App.css';
import Contry from './containers/contry/contry';
import City from './containers/contry/city';
import Contryfun from './containers/contry/Contryfun';
import Cityfun from './containers/contry/Cityfun';

function App() {


  return (
      <>

      {/* Class Base */}

        <Contry/>
        <City/>


      {/* === Function Base === */}

      <Contryfun/>
      <Cityfun/>

      </>
  );
}

export default App;
