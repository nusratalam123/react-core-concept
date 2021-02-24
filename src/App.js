import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const name=["alamgir",'jasim',"kawser","jahangir","shujon","shawon"]
  const products=[
    {name:'photoshope',price:'$99.99'},
    {name:'illustrator',price:'$59.99'},
    {name:'adobe tool',price:'$49.99'}
  ]
  const productName = products.map(product=>product.name)
  console.log(productName)

   
  let name1={
    name:"nowrin nusha",
    job:"student"
  }
  let style={
    color:"red",
    backgroundColor:"green"
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>i am a react person</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            name.map(names=><li>{names}</li>)
          }
        {
          products.map(product=><li>{product.name}</li>)
        }
          <li>{name[0]}</li>
          <li>{name[1]}</li>
          <li>{name[2]}</li>
          <li>{name[3]}</li>
          <li>{name[4]}</li>
        </ul>
         {/* <Person name="rubel ahmed" premek="sumona"></Person> */}
         <Person name={name[0]}></Person>
         <Person name={name[1]}></Person>
         <Person name={name[2]}></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(data=>setUsers(data))
  },[]) 
  
  return(
<div>
  <h3>Dynamic users: {users.length}</h3>
  <ul>{
    users.map(user=><li>name:{user.name}{user.email}</li>) 

  }
  </ul>
</div>
  )

}
function Counter(){
  const[count,setCount]=useState(10);
  const handlerIncrease=()=>setCount(count+1)
  return(
    <div>
      <h1>count:{count}</h1>
      <button onclick="">Decrease</button>
      <button onclick={ ()=> setCount(count+1) }>Increase</button>
    </div>
  )
}

function Person(props){
  let style={
    backgroundColor:"cyan",
    border:"2px solid yellow",
    margin:"10px",
    padding:"10px",color:"blue"
  }
  return (
    // <div style={{border:'10px solid red',margin:'10px'}}>
    <div style={style}>
      {/* <h1 >Name:{props.name+" "+props.premek}</h1> */}
      <h1>Name:{props.name}</h1>
      <h1>{props.premek}</h1>

      <h3>hero of the cricket match</h3>
    </div>
  )
}

export default App;
