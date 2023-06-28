import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../../utils/url'


export default function Tournaments() {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTours = async function () {
    setLoading(true);

    const response = await axios
      .post(`${API_URL}/admin/getTours`);

    const { success, data } = response.data;
    if (success) setTours(data)

    setLoading(false);
  };

  useEffect(() => {
    getTours();
  }, [])


  return (
    <>
      <div className="card">
        <div className='card-header'>
          <div style={{ float: "right" }}>
            <button type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#createTourModal"
            >
              Create Tournaments
            </button>
          </div>
          <h5>Tournaments: {tours.length}</h5>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead class="table-dark">
              <tr>
                <th>Title</th>
                <th>Game</th>
                <th>Stage</th>
                <th>Status</th>
                <th>Prize</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {
                loading ? (
                  <tr>
                    <td style={{ textAlign: "center" }} colSpan={5}>Loading...</td>
                  </tr>
                ) : (
                  tours.length > 0 ? (
                    tours.map((tour, i) => (
                      <tr key={i}>
                        <td>
                          <i className="fab fa-angular fa-lg text-danger me-3"></i>
                          <strong>{tours.title}</strong>
                        </td>
                        <td>{tour.game}</td>
                        <td>{tour.stage}</td>
                        <td>
                          {
                            tour.status === 1 ?
                              <span className="badge bg-label-primary me-1">Active</span>
                              :
                              <span className="badge bg-label-danger me-1">Blocked</span>
                          }
                        </td>
                        <td>{tour.prize}</td>
                        <td>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href=""><i className="bx bx-edit-alt me-1"></i> Edit</a>
                              <a className="dropdown-item" href=""><i className="bx bx-trash me-1"></i> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td style={{ textAlign: "center" }} colSpan={6}>No Tournaments found</td>
                    </tr>
                  )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
