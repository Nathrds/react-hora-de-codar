// import logo from './logo.svg'; não é necessária, pode apagar
import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'; // importando a imagem como componentes, se mudar terá que alterar só em um lugar
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name2 = "Joaquim";

  const [userName] = useState('Maria');

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
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
