import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">📞 Contact Us</h2>
        <p className="text-center mb-5">
          We'd love to hear from you! Whether you have a question about
          facilities, data access, or anything else, our team is ready to answer
          all your questions.
        </p>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-md-6">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h4 className="mb-3">Get in Touch</h4>
                <p>
                  <FaMapMarkerAlt className="me-2 text-primary" /> Department of
                  Health, Peshawar, KPK, Pakistan
                </p>
                <p>
                  <FaPhoneAlt className="me-2 text-primary" /> +92 91 1234567
                </p>
                <p>
                  <FaEnvelope className="me-2 text-primary" />{" "}
                  support@kpkhealth.gov.pk
                </p>
                <p>Office Hours: Mon - Fri, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h4 className="mb-3">Send a Message</h4>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn text-white w-100"
                    style={{ backgroundColor: "#00a4e8" }}
                  >
                    📨 Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
