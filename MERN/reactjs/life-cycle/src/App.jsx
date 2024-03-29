import { useState, useEffect } from "react";

function App() {
  const [products, setProduct] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProduct(data);
  }

  useEffect(
    () => {
      fetchProducts();
    },
    [] //empty
  )

  useEffect(
    () => {
      console.log('Every state change');
      // calls for every state change
    }
  )
  return (
    <div className="container text-center">
      <div className="row">
        {
          products.map(
            (prod) => {
              return <div className="col-3">
                <div className="card p-3 my-2">
                  <img src={prod.image} alt="" width={"100%"} height={350} />
                  <h6 className="my-2">{prod.title}</h6>
                </div>
              </div>
            }
          )
        }
      </div>
    </div>
  );
}

export default App;
