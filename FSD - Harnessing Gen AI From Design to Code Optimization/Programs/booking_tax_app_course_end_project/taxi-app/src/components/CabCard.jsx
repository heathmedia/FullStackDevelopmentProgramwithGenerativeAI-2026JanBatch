import { useNavigate } from "react-router-dom";

export default function CabCard({ cab }) {
  const navigate = useNavigate();

  return (
    <div className="cab-card">
      <h3>{cab.name}</h3>
      <p>Driver: {cab.driver}</p>
      <p>Price/km: ₹{cab.pricePerKm}</p>
      <button className="cab-btn" onClick={() => navigate(`/book/${cab.id}`)}>
        Book Now
      </button>
    </div>
  );
}