const Challenge = () => {
    const a=8;
    const b=2;

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <div>
                <button onClick={() => console.log(a+b)}>Resultado da soma!</button>
            </div>
        </div>
    );
};

export default Challenge;
