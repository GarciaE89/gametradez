import React from 'react';
import { Link } from 'react-router-dom';

const SellList = ({ products, title }) => {
  if (!products.length) {
    return <h3>Nothing For Sale Yet WIP</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {products &&
        products.map(sell => (
          // <div key={sell._id} className="card mb-3">
          //   <p className="card-header">
          //     <Link
          //       to={`/profile/${sell.name}`}
          //       style={{ fontWeight: 700 }}
          //       className="text-light"
          //     >
          //       {sell.name}
          //     </Link>{' '}
          //     sell on {sell.price}
          //   </p>
          //   <div className="card-body">
          //     <Link to={`/sell/${sell._id}`}>
          //       <p>{sell.description}</p>
          //     </Link>
          //   </div>
          // </div>

          <p>{sell.name}</p>

        ))}
    </div>
  );
};

export default SellList;