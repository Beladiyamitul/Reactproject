import logo from './logo.svg';
import './App.css';

function App() {


  // var is not block scope
  // let and const is block scope



  // let a=5;
  // {
  //   let a=10;
  // }
  // console.log(a);



  // const b=10;    // globle scope
  // {
  //   const b=15;    // local scope
  // }
  // console.log(b);



  // let y=12;
  // y=y+3;
  // console.log(y);


// Const value can not be re-declared

  // const x=12;       // Error
  // x=x+3;
  // console.log(x);


  // let c;
  // c=20;
  // console.log(c);


// Const value is compulesorry declared
  // const d;         //Error
  // d=25;
  // console.log(d);

  // ARROW FUNCTION

  // let arr =[50,40,30,20,10];
  // arr.map((a , i) => console.log(a));


  // function intro(){        // Normal Function
  
  // }


  let intro =() =>(
    console.log("Mtul beladiya")
  
  )
  intro();



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
