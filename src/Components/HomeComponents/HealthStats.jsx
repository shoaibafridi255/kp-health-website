import React from "react";
import CountUp from "react-countup";

const HealthStats = () => (
  <section
    className="py-5 text-white text-center"
    style={{ backgroundColor: "#00a4e8" }}
  >
    <div className="container">
      <div className="row g-4">
        <div className="col-md-3">
          <h2>
            <CountUp end={3000} duration={3} />+
          </h2>
          <p>Clinics Built</p>
        </div>
        <div className="col-md-3">
          <h2>
            <CountUp end={12000} duration={3} />+
          </h2>
          <p>Vaccinations This Year</p>
        </div>
        <div className="col-md-3">
          <h2>
            <CountUp end={5000} duration={3} />+
          </h2>
          <p>Doctors Recruited</p>
        </div>
        <div className="col-md-3">
          <h2>
            <CountUp end={150000} duration={3} />+
          </h2>
          <p>Patients Served</p>
        </div>
      </div>
    </div>
  </section>
);
export default HealthStats;
