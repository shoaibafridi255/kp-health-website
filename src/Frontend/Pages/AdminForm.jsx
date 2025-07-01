// import React, { useState } from "react";
// import { db } from "../../Firebase/Firebase";
// import { collection, addDoc } from "firebase/firestore";

// const AdminForm = () => {
//   const [formData, setFormData] = useState({
//     code: "",
//     schoolName: "",
//     sector: "",
//     district: "",
//     unioncouncil: "",
//     village: "",
//     level: "",
//   });

//   const [loading, setLoading] = useState(false); // Spinner control

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Show spinner
//     try {
//       await addDoc(collection(db, "healthData"), formData);
//       alert("✅ Data added successfully!");
//       setFormData({
//         code: "",
//         schoolName: "",
//         sector: "",
//         district: "",
//         unioncouncil: "",
//         village: "",
//         level: "",
//       }); // Reset form
//     } catch (error) {
//       alert("❌ Error adding document: " + error.message);
//     }
//     setLoading(false); // Hide spinner
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: "700px" }}>
//       <div className="card p-4 shadow-lg rounded-4">
//         <h3 className="text-center mb-4">Add Health Center / School Info</h3>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label>Code</label>
//             <input
//               type="text"
//               name="code"
//               value={formData.code}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label>School Name</label>
//             <input
//               type="text"
//               name="schoolName"
//               value={formData.schoolName}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label>Sector</label>
//             <input
//               type="text"
//               name="sector"
//               value={formData.sector}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label>District</label>
//             <input
//               type="text"
//               name="district"
//               value={formData.district}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>UnionCouncil</label>
//             <input
//               type="text"
//               name="unioncouncil"
//               value={formData.unioncouncil}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Village</label>
//             <input
//               type="text"
//               name="village"
//               value={formData.village}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label>Level</label>
//             <input
//               type="text"
//               name="level"
//               value={formData.level}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="btn btn-success w-100 rounded"
//             disabled={loading}
//           >
//             {loading ? (
//               <span className="spinner-border spinner-border-sm me-2" />
//             ) : null}
//             {loading ? "Submitting..." : "Submit Data"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminForm;

import React, { useState } from "react";
import { db } from "../../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    schoolName: "",
    sector: "",
    district: "",
    unioncouncil: "",
    village: "",
    level: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "healthData"), formData);
      toast.success("Record added successfully!");
      setFormData({
        code: "",
        schoolName: "",
        sector: "",
        district: "",
        unioncouncil: "",
        village: "",
        level: "",
      });
    } catch (error) {
      toast.error("❌ Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="card p-4 shadow-lg rounded-4">
        <h4 className="text-center mb-4">Add Health Center / School Info</h4>

        <form onSubmit={handleSubmit}>
          {[
            { label: "Code", name: "code" },
            { label: "School Name", name: "schoolName" },
            { label: "Sector", name: "sector" },
            { label: "District", name: "district" },
            { label: "Union Council", name: "unioncouncil" },
            { label: "Village", name: "village" },
            { label: "Level", name: "level" },
          ].map((field) => (
            <div className="mb-3" key={field.name}>
              <label>{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="btn btn-success w-100 rounded"
            disabled={loading}
          >
            {loading && (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
            )}
            {loading ? "Submitting..." : "Submit Data"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
