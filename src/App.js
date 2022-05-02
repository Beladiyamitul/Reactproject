import logo from './logo.svg';
import './App.css';

function App() {


  const Medicine  = [
    { 
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
   
  ];


  
  // Medicine.map((value , index) => console.log(value.id , value.name , value.price , value.expiry ));  // MAP

    let filterdata = Medicine.filter ((d , i) => d.expiry >= 2022);      // FILTER
  console.log(filterdata);

  let ans = filterdata.reduce((acc,d,i) => acc+d.price,0);     // REDUCE
  console.log(ans);


  
  // let filterdata = Medicine.filter ((d , i) => d.expiry >= 2022)
  // .reduce((acc,d,i) => acc+d.price,0);      // FILTER + REDUCE
  // console.log(filterdata);



  



  return (
    <>
      <table>
          <th>
            <td>Id</td>
            <td>name</td>
            <td>price</td>
            <td>expiry</td>
          </th>
            {

            filterdata.map((value , index) => {
                  return (
                      
                     
                      <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.price}</td>
                        <td>{value.expiry}</td>
                      
                      </tr>
                 
                        
                  
                    
                      )
                    })
               
            }
      </table> 
    </>
  );
}

export default App;
