import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div className=''>
          <div className='white f3'>
                {`${name}, your number of entries is...`}
          </div>
          <div className='white f1'>
                {entries}
          </div>
        </div>
    );
}
export default Rank;