import React from "react";
import HealthStats from "../../Components/HomeComponents/HealthStats";
import HealthMap from "../../Components/HomeComponents/HealthMap";
import Testimonials from "../../Components/HomeComponents/testimonials";
import Heroimg1 from "../../Assets/Heroimg1.jpg";
import { FaHospitalSymbol, FaChartLine, FaUserShield } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white text-center py-5"
        style={{
          backgroundImage: `url(${Heroimg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1 className="display-4 fw-bold">KPK Health Monitoring Dashboard</h1>
        <p className="lead">
          Bridging the gap between remote health facilities and central
          administration.
        </p>
      </div>
      {/* <NewsCarousel /> */}

      {/* Feature Highlights */}
      <div className="container py-5">
        <h2 className="text-center mb-4">📊 Key Features</h2>

        <div className="row text-center">
          <div className="col-md-4 mb-4 ">
            <FaHospitalSymbol size={40} className="text-success mb-2" />
            <h5>Health Center Tracking</h5>
            <p>
              Digitally record and monitor remote school & health unit data with
              ease.
            </p>
            <hr />
          </div>
          <div className="col-md-4 mb-4">
            <FaChartLine size={40} className="text-primary mb-2" />
            <h5>Data Visualization</h5>
            <p>
              View trends and insights for better decision-making and resource
              allocation.
            </p>
            <hr />
          </div>
          <div className="col-md-4 mb-4">
            <FaUserShield size={40} className="text-danger mb-2" />
            <h5>Secure Admin Access</h5>
            <p>
              Admins can log in, manage entries, and maintain secure access
              control.
            </p>
            <hr />
          </div>
        </div>
      </div>

      <HealthStats />
      <Testimonials />
      {/* Data Collection Philosophy */}
      <div className="bg-light py-5">
        <div className="container">
          <h3 className="text-center mb-4">📌 Why Digital Monitoring?</h3>
          <p className="text-center px-4">
            In a province like Khyber Pakhtunkhwa, where terrain and resources
            make manual monitoring difficult, this project ensures real-time
            data collection, accuracy, and transparency — leading to better
            public health policies and timely interventions.
          </p>
        </div>
      </div>

      <HealthMap />
    </div>
  );
};

export default Home;
