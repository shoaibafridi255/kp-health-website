//

import React, { useEffect, useState } from "react";

const EditableDetailsModal = ({ selectedData, onUpdate, onDelete }) => {
  const [formData, setFormData] = useState(selectedData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(selectedData);
    setErrors({});
  }, [selectedData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value || value.trim() === "") {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onUpdate(formData);
    window.bootstrap.Modal.getInstance(
      document.getElementById("detailsModal")
    ).hide();
  };

  const handleDelete = () => {
    onDelete(formData);
    window.bootstrap.Modal.getInstance(
      document.getElementById("detailsModal")
    ).hide();
  };

  return (
    <div
      className="modal fade"
      id="detailsModal"
      tabIndex="-1"
      aria-labelledby="detailsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Entry</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body row g-3">
            {[
              "schoolName",
              "code",
              "sector",
              "district",
              "unionCouncil",
              "village",
              "level",
            ].map((field) => (
              <div className="col-md-6" key={field}>
                <label className="form-label text-capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  name={field}
                  className={`form-control ${
                    errors[field] ? "is-invalid" : ""
                  }`}
                  value={formData[field] || ""}
                  onChange={handleChange}
                />
                {errors[field] && (
                  <div className="invalid-feedback">{field} is required</div>
                )}
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button className="btn btn-warning" onClick={handleUpdate}>
              Update
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableDetailsModal;
