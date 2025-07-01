import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/Firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Components/Loader";

const AdminDataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [editValues, setEditValues] = useState({});

  const fetchData = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "healthData"));
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(docs);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id, rowData) => {
    setEditRow(id);
    setEditValues(rowData);
  };

  const handleChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    setLoading(true);
    try {
      const docRef = doc(db, "healthData", id);
      await updateDoc(docRef, editValues);
      toast.success("Record updated successfully");
      setEditRow(null);
      await fetchData();
    } catch (err) {
      toast.error("❌ Update failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this entry?")) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, "healthData", id));
      toast.error("Record deleted successfully");
      await fetchData();
    } catch (err) {
      toast.error("❌ Delete failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="table-responsive mt-4">
      <h4 className="text-center mb-4">🛠️ Manage Submitted Data</h4>

      {loading && (
        <div className="text-center my-4">
          <Loader />
        </div>
      )}

      {!loading && data.length === 0 && (
        <div className="alert alert-warning text-center">
          🚫 No data found or the list is empty.
        </div>
      )}

      {data.length > 0 && (
        <table className="table table-striped table-bordered shadow text-center">
          <thead className="table-info">
            <tr>
              <th>Serial No</th>
              <th>Code</th>
              <th>School Name</th>
              <th>Sector</th>
              <th>District</th>
              <th>UnionCouncil</th>
              <th>Village</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) =>
              editRow === item.id ? (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      name="code"
                      value={editValues.code}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="schoolName"
                      value={editValues.schoolName}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="sector"
                      value={editValues.sector}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="district"
                      value={editValues.district}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="unioncouncil"
                      value={editValues.unioncouncil}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="village"
                      value={editValues.village}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="level"
                      value={editValues.level}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleUpdate(item.id)}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="spinner-border spinner-border-sm" />
                      ) : (
                        "Save"
                      )}
                    </button>
                    <button
                      className="btn btn-secondary mt-2 btn-sm"
                      onClick={() => setEditRow(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.code}</td>
                  <td>{item.schoolName}</td>
                  <td>{item.sector}</td>
                  <td>{item.district}</td>
                  <td>{item.unioncouncil}</td>
                  <td>{item.village}</td>
                  <td>{item.level}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleEdit(item.id, item)}
                    >
                      ✏️
                    </button>
                    <button
                      className="btn btn-danger btn-sm my-2 mx-2"
                      onClick={() => handleDelete(item.id)}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="spinner-border spinner-border-sm" />
                      ) : (
                        "🗑️"
                      )}
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default AdminDataList;
