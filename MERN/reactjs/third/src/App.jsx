import CartRow from "./CartRow";
import ProductBox from "./ProductBox";
import Table from "./Table";
import { data } from "./data";

function App() {
  const myData = data.slice(0, 10);
  // const productList = data.map(
  //   (d) => {
  //     return <ProductBox key={d.id} name={d.title} image={d.image} />
  //   }
  // )


  return (
    // <Table/>
    // <div className="container">
    //   <div className="row">
    //     {productList}
    //   </div>
    // </div>
    <table className="container table">
      <thead>
        <tr>
          <th>Sr</th>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {
          myData.map(
            (d, i) => {
              return <CartRow key={i} sr={i + 1} name={d.title} image={d.image} price={d.price} />
            }
          )
        }
      </tbody>
    </table>
  );
}

export default App;
