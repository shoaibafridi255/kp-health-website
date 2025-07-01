import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import Loader from "../../Components/Loader";

const Data = () => {
  const [healthData, setHealthData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "healthData"));
        const dataArr = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHealthData(dataArr);
        setFilteredData(dataArr);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Get unique districts and sectors for filter dropdowns
  const districts = [...new Set(healthData.map((d) => d.district))];
  const sectors = [...new Set(healthData.map((d) => d.sector))];

  // Filter data whenever filters/searchText change
  useEffect(() => {
    let filtered = healthData;

    if (searchText) {
      filtered = filtered.filter((item) =>
        item.schoolName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedDistrict) {
      filtered = filtered.filter((item) => item.district === selectedDistrict);
    }

    if (selectedSector) {
      filtered = filtered.filter((item) => item.sector === selectedSector);
    }

    setFilteredData(filtered);
  }, [searchText, selectedDistrict, selectedSector, healthData]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Health & School Records</h2>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="form-control"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">All Districts</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            onChange={(e) => setSelectedSector(e.target.value)}
          >
            <option value="">All Sectors</option>
            {sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <Loader />
        </div>
      ) : filteredData.length === 0 ? (
        <p className="text-center text-muted">No data found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered shadow">
            <thead className="table-primary text-center">
              <tr>
                <th>Serial No</th>
                <th>Code</th>
                <th>School Name</th>
                <th>Sector</th>
                <th>District</th>
                <th>Union Council</th>
                <th>Village</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.code}</td>
                  <td>{item.schoolName}</td>
                  <td>{item.sector}</td>
                  <td>{item.district}</td>
                  <td>{item.unioncouncil}</td>
                  <td>{item.village}</td>
                  <td>{item.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Data;
