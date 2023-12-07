const Events = () => {

    const handleMyEvent = (e) => { // e = event = são os dados que o evento contem, temos que declarar
        console.log(e);

        console.log('Ativou o evento!');
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Tembém posso renderizar isso!</h1>
        }
    }; // podemos usar o JSX fora do return também

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou')}>
                    Clique aqui também!
                </button>
                {/* => arronFuction que vai ser executada APÓS o click */}
                <button onClick={() => {
                    if(true) {
                        console.log('Isso não deveria existir =)');
                    } // é possível fazer assim, mas não é um bom método
                }}>
                    Clica aqui, por favor.
                </button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    );
};

export default Events;