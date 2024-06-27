// import logo from './logo.svg';
import './App.css';

// componentes
import { HelloWord } from './components/HelloWord';
import { SayMyName } from './components/SayMyName';
import { Pessoa } from './components/Pessoa';


function App() {
  // const name = 'Nathalia'

  // const newName = name.toUpperCase()

  // function sum (a, b) {
  //   return a + b
  // }

  // tamanho no final de 150 x 150 
  // const url = 'https://via.placeholder.com/150'

  const nome = "Maria"

  return (
    <div className="App">
      {/* <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="minha imagem" /> */}
      {/* <HelloWord /> */}
      <SayMyName nome="Nathalia" />
      <SayMyName nome="Ana" />
      <SayMyName nome={nome}/>
      <Pessoa
        nome="Leticia"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150" 
      />
    </div>
  );
}

export default App;
