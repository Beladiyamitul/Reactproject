import logo from './logo.svg';
import './App.css';

function App() {


  const Employee   = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
   
  ];


  
  // Employee.map((value , index) => console.log(value.name , value.age , value.salary , value.bonus ));  // MAP

  //   let filterdata = Employee.filter ((d , i) => d.status >= true);      // FILTER
  // console.log(filterdata);

  // let ans = filterdata.reduce((acc,d,i) => acc+d.bonus+d.salary,0);     // REDUCE
  // console.log(ans);


  
  let filterdata = Employee.filter ((d , i) => d.status >= true)
  .reduce((acc,d,i) => acc+d.bonus+d.salary,0);      // FILTER + REDUCE
  console.log(filterdata);



  



  return (
    <>
      <table border="1">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Totle Salary</th>
            <th>Total Cost</th>
           
          </tr>
            {

            filterdata.map((value , index) => {
                  return (
                      
                     
                      <tr>
                        <td>{value.name}</td>
                        <td>{value.age}</td>
                        <td>{value.salary+value.bonus}</td>
                        {index === 0?<td rowspan={Employee.length}>{ans}</td> : null}
                      
                      </tr>
                 
                        
                  
                    
                      )
                    })
               
            }
      </table>  
    </>
  );
}

export default App;
