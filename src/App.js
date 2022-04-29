import logo from './logo.svg';
import './App.css';

function App() {

let arr =[50,"mitul",40,30,20,10];
// console.log(arr[2]);

// let obj = {
//   id : 20,
//   per : 10,
//   age : 19
// }
// console.log(obj.per);  // OR console.log(obj["per"]);

//  arr.push(58);             // push use is Add element at last

// arr.unshift(58);           // unshift use is Add element at First

//  arr.pop();           // Pop use is Remove element at last

  // arr.shift();           // shift use is Remove element at First

  // arr.splice(2 , 0 , 23);           // splice use is Add element at specific Position

  // arr.splice(2 , 2);           // splice use is Remove 2nd index element

  // console.log(arr.toString());        // toString use is Convert array to string

  //  let res = arr.some((a) => a > 60);        // Cheack Within Array Return true/False

  //  let res = arr.find((a) => a > 40);        // Cheack Within Array Return First Match element

  //  let res =Array.isArray(arr);        // Cheack Given element is array or not


  //  console.log(res);

//  console.log(arr);

//  console.log(dcr);






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
