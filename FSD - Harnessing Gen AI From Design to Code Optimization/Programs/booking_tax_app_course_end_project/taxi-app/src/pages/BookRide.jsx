import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { bookRide } from "../services/api";

export default function BookRide() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    distance: ""
  });
  const [error, setError] = useState("");

  const validate = () => {
    if (!form.pickup.trim() || !form.drop.trim() || !form.distance) {
      setError("Please fill in all fields.");
      return false;
    }

    const distanceValue = Number(form.distance);
    if (Number.isNaN(distanceValue) || distanceValue <= 0) {
      setError("Distance must be a valid number greater than zero.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    await bookRide({
      cabId: id,
      pickup: form.pickup.trim(),
      drop: form.drop.trim(),
      distance: Number(form.distance),
      status: "Booked"
    });

    alert("Ride Booked!");
    navigate("/rides");
  };

  return (
    <div className="page page-book-ride">
      <h2 className="section-title">Book Ride</h2>
      <div className="form-card">
        <input
          className="field-input"
          placeholder="Pickup"
          value={form.pickup}
          onChange={e => setForm({...form, pickup: e.target.value})}
        />
        <input
          className="field-input"
          placeholder="Drop"
          value={form.drop}
          onChange={e => setForm({...form, drop: e.target.value})}
        />
        <input
          className="field-input"
          placeholder="Distance (km)"
          type="number"
          value={form.distance}
          onChange={e => setForm({...form, distance: e.target.value})}
        />
        {error && <p className="error-text">{error}</p>}
        <button className="submit-button" onClick={handleSubmit}>Confirm Booking</button>
      </div>
    </div>
  );
}