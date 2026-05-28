import { useState } from "react";
import toast from "react-hot-toast";

export default function Trips(){

  const [tripName, setTripName] = useState("");

  const [destination, setDestination] = useState("");

  const [date, setDate] = useState("");

  const [budget, setBudget] = useState("");

  const [trips, setTrips] = useState([]);

  const addTrip = () => {

    if(
      tripName &&
      destination &&
      date &&
      budget
    ){

      const newTrip = {
        tripName,
        destination,
        date,
        budget
      };

      setTrips([
        ...trips,
        newTrip
      ]);

      setTripName("");
      setDestination("");
      setDate("");
      setBudget("");
      toast.success("Trip added successfully!");
    }
  };

  return(

    <div>

      <h1>Trip Planner ✈️</h1>

      <div className="form-card">

        <input
          type="text"
          placeholder="Trip Name"
          value={tripName}
          onChange={(e)=>
            setTripName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e)=>
            setDestination(e.target.value)
          }
        />

        <input
          type="date"
          value={date}
          onChange={(e)=>
            setDate(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e)=>
            setBudget(e.target.value)
          }
        />

        <button onClick={addTrip}>
          Add Trip
        </button>

      </div>

      <div className="cards">

        {trips.map((trip,index)=>(

          <div className="card" key={index}>

            <h2>{trip.tripName}</h2>

            <p>
              📍 {trip.destination}
            </p>

            <p>
              📅 {trip.date}
            </p>

            <p>
              💰 ₹ {trip.budget}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}