import { products } from "../data/products";
import "./Orders.css"
const Orders = () => {
  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <th>Product Name</th>
          <th>Product Number</th>
          <th>Payment</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <>
                <tr key={product.id}>
                  <td>{product.productName}</td>
                  <td>{product.productNumber}</td>
                  <td>{product.payment}</td>
                  <td className={product.status.toLowerCase()==="pending" ? 'warning' : ''}>{product.status}</td>
                  <td className="primary">Details</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <a href="#">Show all</a>
    </div>
  );
};

export default Orders;
