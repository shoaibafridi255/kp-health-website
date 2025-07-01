import React from "react";
import {
  FaStethoscope,
  FaHospital,
  FaUserMd,
  FaAmbulance,
} from "react-icons/fa";
import "../../Styles/About.css"; // We'll add custom CSS too

const About = () => {
  return (
    <div className="about-page container py-5">
      <h2 className="text-center mb-4 about-title">
        👨‍⚕️ About Health Department – KPK
      </h2>

      <p className="text-center lead mb-5">
        The Health Department of Khyber Pakhtunkhwa is committed to ensuring
        accessible, affordable, and quality healthcare services for every
        citizen across the province — from urban centers to the most remote
        tribal areas.
      </p>

      {/* Core Focus Areas */}
      <div className="row text-center mb-5">
        <div className="col-md-3 mb-4">
          <div className="card about-card h-100 shadow-sm p-3">
            <FaHospital size={40} className="text-success mb-2" />
            <h5>Infrastructure</h5>
            <p>
              Over 1,000 health facilities including BHUs, RHCs, and DHQs
              established across KPK.
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card about-card h-100 shadow-sm p-3">
            <FaUserMd size={40} className="text-primary mb-2" />
            <h5>Doctors & Specialists</h5>
            <p>
              Highly skilled professionals serving patients with dedication in
              government hospitals.
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card about-card h-100 shadow-sm p-3">
            <FaStethoscope size={40} className="text-info mb-2" />
            <h5>Primary Healthcare</h5>
            <p>
              Focus on prevention, maternal care, immunizations, and rural
              outreach.
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card about-card h-100 shadow-sm p-3">
            <FaAmbulance size={40} className="text-danger mb-2" />
            <h5>Emergency Services</h5>
            <p>
              Ambulance units, trauma centers & 24/7 helplines to ensure timely
              response.
            </p>
          </div>
        </div>
      </div>

      {/* Highlight Banner */}
      <div className="highlight-section rounded-4 shadow-lg p-5 text-white text-center mb-5">
        <h3>🚑 Empowering Public Health for All</h3>
        <p className="mt-3">
          Our mission is to strengthen the healthcare delivery system through
          modernization, innovation, and transparency.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="row text-center mt-4">
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-sm about-card">
            <h5 className="mb-3">🎯 Our Mission</h5>
            <p>
              To provide equitable, efficient, and quality healthcare services
              to the people of Khyber Pakhtunkhwa, ensuring no one is left
              behind.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-sm about-card">
            <h5 className="mb-3">🌍 Our Vision</h5>
            <p>
              A healthy KPK where every citizen has access to safe, sustainable,
              and responsive healthcare facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
