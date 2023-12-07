import {useState} from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

    // mais recomendado é esse por se necessitar de alteração é mais fácil
    const [user] = useState([
        { id: 1, name: "Ana", age: 31 },
        { id: 724565, name: "João", age: 28},
        { id: 832156, name: "Clara", age: 44}
    ]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {user.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender