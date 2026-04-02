import { useEffect, useState } from "react";
import { getCabs } from "../services/api";
import CabCard from "../components/CabCard";

export default function Home() {
  const [cabs, setCabs] = useState([]);

  useEffect(() => {
    getCabs().then(res => setCabs(res.data));
  }, []);

  return (
    <div className="home-page">
      <h2>Available Cabs</h2>
      <div className="cab-grid">
        {cabs.map(cab => (
          <CabCard key={cab.id} cab={cab} />
        ))}
      </div>
    </div>
  );
}