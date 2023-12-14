// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hook
import { useConterContext } from "../hooks/useCounterContext";

const Products = () => {
    // const {counter} = useContext(CounterContext);
    const {counter} = useConterContext();

  return (
    <div>
        <h1>Products</h1>
        <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Products;