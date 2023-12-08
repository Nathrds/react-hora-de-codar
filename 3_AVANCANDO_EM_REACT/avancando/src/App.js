// import logo from './logo.svg'; não é necessária, pode apagar
import { Fragment, useState } from 'react';
import './App.css';

import City from './assets/city.jpg'; // importando a imagem como componentes, se mudar terá que alterar só em um lugar
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';
// import Fragment from './components/Fragment'; só para tirar o erro


function App() {
  // const name2 = "Joaquim";

  const [userName] = useState('Maria');

  const cars = [
    {id: 1, brand: "Ferraria", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ];

  function showMessage() {
    console.log("evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 1, name: "Ana", age: 16, job: "Estudante"},
    {id: 2, name: "Macela", age: 32, job: "Arquiteta"},
    {id: 3, name: "Joana", age: 50, job: "Esteticista"}
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
        {/* quando a imagem está em Public posso acessar ela diretamente, sem fazer caminho de pastas */}
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand='BMW' km={10000} color='Preto'  newCar={false}/>
      {/* reaproveitamento */}
      <CarDetails brand='Ford' color="Vermelha" km={0}  newCar={true}/>
      <CarDetails brand='Fiat' color="Branco" km={4500}  newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/* fragments */}
      <Fragment porpFragment='teste' />
      {/* children */}
      <Container myValue='testing'>
        <p>E este é o conteúdo</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio 4 */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} job={user.job} />
      ))}
    </div>
  );
}

export default App;
