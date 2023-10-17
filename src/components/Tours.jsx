import React, { Fragment } from 'react';

// importing components
import Card from './Card';

const Tours = ({tours, removeTour}) => {
  return (
    <Fragment>
        <div className="container">
            <div>
                <h2 className='title'>
                    Plan With BugBusters!
                </h2>
            </div>

            <div className='cards'>
                {
                    tours.map((item) => (
                        <Card 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            info={item.info}
                            img={item.image}
                            price={item.price}
                            removeTour={removeTour}
                        />
                    ))
                }
            </div>
        </div>
    </Fragment>
  );
};

export default Tours;