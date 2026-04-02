import { useEffect, useState } from "react";
import { getRides, cancelRide } from "../services/api";

export default function MyRides() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    loadRides();
  }, []);

  const loadRides = () => {
    getRides().then(res => setRides(res.data));
  };

  const handleCancel = (id) => {
    cancelRide(id).then(() => loadRides());
  };

  return (
    <div className="page page-my-rides">
      <h2 className="section-title">My Rides</h2>
      <div className="rides-list">
        {rides.map(r => (
          <div key={r.id} className="ride-card">
            <div className="ride-details">
              <p className="ride-route">{r.pickup} → {r.drop}</p>
              <p className="ride-meta">Distance: {r.distance ?? "0"} km</p>
              {r.fare !== undefined && <p className="ride-meta">Fare: ₹{r.fare}</p>}
              {r.status && <p className="ride-status">{r.status}</p>}
            </div>
            <button className="cancel-button" onClick={() => handleCancel(r.id)}>Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
}