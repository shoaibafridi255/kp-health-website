import React from "react";
import "../../Styles/Testimonial.css";
const testimonials = [
  {
    name: "Dr. Ayesha Khan",
    text: "The KPK Health Department has transformed primary healthcare facilities in remote areas. Salute to their dedication.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jamal Afridi",
    text: "The vaccination drive helped save my daughter’s life. Thank you for spreading awareness!",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

const Testimonials = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">What People Say</h2>
      <div className="row g-4">
        {testimonials.map((t, i) => (
          <div className="col-md-6" key={i}>
            <div className="card shadow testimonial-card p-3">
              <div className="d-flex align-items-center mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle me-3"
                  width={60}
                  height={60}
                />
                <h5 className="mb-0">{t.name}</h5>
              </div>
              <p className="fst-italic">“{t.text}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Testimonials;
