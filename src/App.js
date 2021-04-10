import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const heroes = ['Razzak','Jasim','Alamgir','Salman','Shakib','Shuvo'];

  const profession = ['Web Developer','Student','Programmer','Housewife'];

  const products = [
    {name: "photoshop", price: "$90.99"},
    {name: "illustrator", price: "$50.50"},
    {name: "PDF Reader", price: "$6.90"},
    {name: "Premiere El", price: "$260.90"}
 ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react developer</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            heroes.map(hero => <li>{hero}</li>)
          }
        </ul>

        <Person name ='Jakir'  job = {profession[0]}></Person>
        <Person name ='Nazia'  job = {profession[1]}></Person>

        {
            products.map(x => <Product product = {x}></Product>)
        }
        {/* <Product product = {products[0].name}  price = {products[0].price}></Product> */}

      </header>
    </div>
  );
}



function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}


function Users() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])

  return(
    <div>
      <h3>Dynamic user: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}



function Person(props) {
  var style = {
    border:"5px solid red",
    margin:"10px",
    padding: "10px",
    color: "green",
    backgroundColor: "yellow",
    width:"400px"
  }
  // console.log(props);
  return(
    <section style={style}>
      <h1>Name: {props.name}</h1>
      <h3>Prof: {props.job}</h3>
    </section>
  )
}



function Product(props) {
  const productStyle = {
    backgroundColor: "lightgray",
    border: "2px solid blue",
    borderRadius: "5px",
    height: "250px",
    width: "200px",
    margin: "5px",
    float: "left"
  }
  const {name,price} = props.product;             //'props' is a special keyword in react 
  console.log(props);
  return(
    <div style = {productStyle}>
      {/* <h3>{props.product}</h3>
      <h1>{props.price}</h1> */}
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

export default App;
