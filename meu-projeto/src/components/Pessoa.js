// import React from 'react'

// desestruturando o props
// para diminuir o tanto de nome props vc pode usar structuring do JS para transformar a props no proprio nome da propriedade, sem precisar ficar chamando e deixando o componente mais simples
export const Pessoa = ({foto, nome, idade, profissao}) => {
  return (
    <div>
        <img src={foto} alt={nome}/>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
    </div>
  )
}
