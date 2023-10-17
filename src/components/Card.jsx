import React, { Fragment, useState } from 'react';

const Card = ({id, name, info, img, price, removeTour}) => {

    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

  return (
    <Fragment>
        <div className="card">
            <img src={img} className='image' alt="laoding_image" />
            
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className='read-more' onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button onClick={() => removeTour(id)} className='btn-red'>
                Not Interested
            </button>
        </div>

    </Fragment>
  );
};

export default Card;