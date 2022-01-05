import React from 'react';
import { Link } from 'react-router-dom';

const SellList = ({ sellz, title }) => {
  if (!sellz.length) {
    return <h3>Nothing For Sale Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {sellz &&
        sellz.map(sell => (
          <div key={sell._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${sell.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {sell.username}
              </Link>{' '}
              sell on {sell.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/sell/${sell._id}`}>
                <p>{sell.sellText}</p>
                <p className="mb-0">
                  Reactions: {sell.reactionCount} || Click to{' '}
                  {sell.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SellList;