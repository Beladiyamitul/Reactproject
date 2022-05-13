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
import { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import Home from './containers/Home/Home';



const Lodaingdata = Loading(Home)

function App() {
  

  const [Loading , setLoading] = useState(false);
  const [Data , setData] = useState([]);

  let orgData = [
    {id:101,name:"harsh"},
    {id:102,name:"nevil"}
  ]
  useEffect(
    () => {
      setLoading(true);
      setTimeout(() => {setLoading(false);setData(orgData)},2000);
    },
  [])

  console.log(Loading, Data);

  return (
      <>

      <h4> Higher Order Component</h4> 

      <Lodaingdata
        isLoading={Loading}
        data={Data}
      />

     

      </>
  );
}

export default App;
