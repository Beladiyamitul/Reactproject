import logo from './logo.svg';
import './App.css';
import Contry from './containers/contry/Contry';
import City from './containers/contry/City';
import Contryfun from './containers/contry/Contryfun';
import Cityfun from './containers/contry/Cityfun';
import Con_city_change from './containers/contry/Con_city_change';
import Branch from './containers/contry/Branch';
import Time from './containers/Time/Time';
import TimeFun from './containers/Time/TimeFun';

function App() {


  return (
      <>

    <h2>Class Base Components</h2> 

        {/* <Contry gdpval={6.4}/>
        <br/><br/>
        <City cityname={'Vadodara'}/>

        <br/><br/>
        <h2>Function Base  Components</h2>  */}
        

      <Contryfun  gdpval={6.4}/>
      {/* <br/><br/>
      <Cityfun/> */}

      <Branch/>

      <h2>Class Base Life Cycle</h2> 

      <Time/>

      <h2> Function Base Life Cycle</h2> 

      <TimeFun/>

     

      </>
  );
}

export default App;
