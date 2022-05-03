import logo from './logo.svg';
import './App.css';

function App() {

  // Copy , Merge , destructure. In Array
  
  let arr =[10,20,30,40,50];

  // copy
  let arr1 =[...arr];
  console.log(arr1);

  // Merge
  let arr2 =[55,...arr,70];
  console.log(arr2);

  // destructure

  let [sci , ss ,eng , guj ,hindi ] = arr;
  console.log(eng);




 // Copy , Merge , destructure. In Object
  
  let obj ={
    id:102,
    name:"ajay"
  };

  // copy

  let obj1 = {...obj};
  console.log(obj1);

  // Merge

  let obj2 ={...obj, place:"surat"};
  console.log(obj2);

  // destructure

  let {id,name}=obj;
  console.log(id,name);



  return (
    <>
  
    </>
  );
}

export default App;
