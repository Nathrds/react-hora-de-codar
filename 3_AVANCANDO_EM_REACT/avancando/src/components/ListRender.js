import {useState} from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

    // mais recomendado é esse por se necessitar de alteração é mais fácil
    const [user, setUser] = useState([
        { id: 1, name: "Ana", age: 31 },
        { id: 2, name: "João", age: 28},
        { id: 3, name: "Clara", age: 44}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUser((prevUser) => {
            console.log(prevUser);
            return prevUser.filter((user) => randomNumber !== user.id)
        });
    };

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
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender