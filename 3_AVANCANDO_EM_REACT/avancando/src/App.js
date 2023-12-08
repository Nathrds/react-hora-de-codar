// import logo from './logo.svg'; não é necessária, pode apagar
import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'; // importando a imagem como componentes, se mudar terá que alterar só em um lugar
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name2 = "Joaquim";

  const [userName] = useState('Maria');

  const cars = [
    {id: 1, brand: "Ferraria", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
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
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
    </div>
  );
}

export default App;
