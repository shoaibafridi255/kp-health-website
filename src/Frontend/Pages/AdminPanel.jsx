// import React, { useState } from "react";
// import { useAuth } from "../../Context/AuthContext";
// import { useNavigate, Link, Outlet } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../Firebase/Firebase";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { IoLogOutSharp } from "react-icons/io5";

// const AdminPanel = () => {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Successfully Logged In!");
//       navigate("/adminpanel/form");
//     } catch (err) {
//       setError("Invalid email or password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     await logout();
//     navigate("/adminpanel");
//     toast.warning("Logged Out");
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card p-4 shadow rounded-4 border-0">
//         <h4 className="text-center mb-4">Admin Panel</h4>

//         {!currentUser ? (
//           <form onSubmit={handleLogin}>
//             <div className="mb-3 text-start">
//               <label className="form-label">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="admin@example.com"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3 text-start">
//               <label className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn text-white  w-100 rounded"
//               disabled={loading}
//               style={{ backgroundColor: "#00a4e8" }}
//             >
//               {loading ? (
//                 <>
//                   <span
//                     className="spinner-border spinner-border-sm me-2"
//                     role="status"
//                     aria-hidden="true"
//                   ></span>
//                   Logging in...
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </button>
//           </form>
//         ) : (
//           <>
//             <div className="d-flex justify-content-center gap-3 mb-4">
//               <Link to="form" className="btn btn-success rounded px-4">
//                 ➕ Add New Data
//               </Link>
//               <Link
//                 to="data"
//                 className="btn rounded px-4 text-white"
//                 style={{ backgroundColor: "#00a4e8" }}
//               >
//                 📋 Manage Data
//               </Link>
//               <button
//                 className="btn btn-danger rounded px-4"
//                 onClick={handleLogout}
//               >
//                 <IoLogOutSharp size={26} /> Logout
//               </button>
//             </div>
//             <Outlet />
//           </>
//         )}

//         {/* Toast container */}
//         <ToastContainer position="top-right" autoClose={3000} />
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoLogOutSharp } from "react-icons/io5";

const AdminPanel = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("LoggedIn Success!");
      navigate("/adminpanel/form");
    } catch (err) {
      toast.error("Email or password is incorrect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/adminpanel");
    toast.warning("🚪 Logged Out");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow rounded-4 border-0">
        <h4 className="text-center mb-4">Admin Panel</h4>

        {!currentUser ? (
          <form onSubmit={handleLogin}>
            <div className="mb-3 text-start">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="admin@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn text-white w-100 rounded"
              disabled={loading}
              style={{ backgroundColor: "#00a4e8" }}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        ) : (
          <>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <Link to="form" className="btn btn-success rounded px-4">
                ➕ Add New Data
              </Link>
              <Link
                to="data"
                className="btn rounded px-4 text-white"
                style={{ backgroundColor: "#00a4e8" }}
              >
                📋 Manage Data
              </Link>
              <button
                className="btn btn-danger rounded px-4"
                onClick={handleLogout}
              >
                <IoLogOutSharp size={26} /> Logout
              </button>
            </div>
            <Outlet />
          </>
        )}

        {/* Toast container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default AdminPanel;
