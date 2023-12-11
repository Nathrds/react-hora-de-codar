import './MyForm.css';
import {useState} from 'react';

const MyForm = ({user}) => {
  // 6- controlled inputs

  // 3- gerenciamento de dados de input
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleName = (e) => {
    setName(e.target.value);
  };

  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault(); // parar o envio no botão o formulário não recarregar a página
    console.log('enviando o formulário');
    console.log(name, email);

    // validação
    // envio

    // 7- limpar form (resetando)
    setName("");
    setEmail("");
  };

  return (
    <div>
        {/* 5- envio de form */}
        {/* criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={(handleName)} value={name} />
            </div>
            {/* 2- label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* 4- simplificação de manipulação de state inline */}
                <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm