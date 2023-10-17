import React, { Fragment, useState} from "react";

// importing css file
import "./index.css";

// importing components
import Tours from "./components/Tours";

// importing data
import data from "./data";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  } 

  return (
    <Fragment>
      <div className="app">
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    </Fragment>
  );
};

export default App;
