import MyComponent from "./MyComponent";

// arquivo de estilo
const FirstComponent = () => {
    // algum comentário

    /*
        Multi line
     */
    
    return (
        <div>
            {/* tem que ser dentro de algum elemento pai para comentar*/}
            <h1>Meu primeiro componente</h1>
            <p className="test">Meu texto</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;
