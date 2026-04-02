import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bookRide, getCabs } from "../services/api";

export default function BookingForm({ cabId }) {
  const navigate = useNavigate();

  const [cab, setCab] = useState(null);

  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    distance: ""
  });

  const [fare, setFare] = useState(0);
  const [error, setError] = useState("");

  // 🔹 Fetch selected cab details
  useEffect(() => {
    getCabs().then(res => {
      const selectedCab = res.data.find(c => c.id === parseInt(cabId));
      setCab(selectedCab);
    });
  }, [cabId]);

  // 🔹 Calculate fare dynamically
  useEffect(() => {
    if (cab && form.distance) {
      const calculatedFare = form.distance * cab.pricePerKm;
      setFare(calculatedFare);
    }
  }, [form.distance, cab]);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Validate form
  const validate = () => {
    if (!form.pickup || !form.drop || !form.distance) {
      setError("All fields are required!");
      return false;
    }

    if (form.distance <= 0) {
      setError("Distance must be greater than 0");
      return false;
    }

    setError("");
    return true;
  };

  // 🔹 Submit booking
  const handleSubmit = async () => {
    if (!validate()) return;

    const rideData = {
      cabId: cab.id,
      cabName: cab.name,
      driver: cab.driver,
      pickup: form.pickup,
      drop: form.drop,
      distance: Number(form.distance),
      fare: fare,
      status: "Booked",
      createdAt: new Date().toISOString()
    };

    try {
      await bookRide(rideData);
      alert("✅ Ride booked successfully!");
      navigate("/rides");
    } catch (err) {
      setError("❌ Failed to book ride");
    }
  };

  // 🔹 Loading state
  if (!cab) return <p>Loading cab details...</p>;

  return (
    <div className="page page-booking">
      <h2 className="section-title">🚖 Book Your Ride</h2>

      <div className="detail-card">
        <h3>{cab.name}</h3>
        <p>Driver: {cab.driver}</p>
        <p>Price/km: ₹{cab.pricePerKm}</p>
      </div>

      <input
        type="text"
        name="pickup"
        placeholder="Pickup Location"
        value={form.pickup}
        onChange={handleChange}
        className="field-input"
      />

      <input
        type="text"
        name="drop"
        placeholder="Drop Location"
        value={form.drop}
        onChange={handleChange}
        className="field-input"
      />

      <input
        type="number"
        name="distance"
        placeholder="Distance (km)"
        value={form.distance}
        onChange={handleChange}
        className="field-input"
      />

      <h3>💰 Estimated Fare: ₹{fare}</h3>

      {error && <p className="error-text">{error}</p>}

      <button onClick={handleSubmit} className="submit-button">
        Confirm Booking
      </button>
    </div>
  );
}

