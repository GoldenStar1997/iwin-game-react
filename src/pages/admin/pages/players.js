import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../../utils/url'
import { Link } from 'react-router-dom'


export default function Players() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async function () {
    setLoading(true);

    const response = await axios
      .post(`${API_URL}/admin/getUsers`);

    const { success, data } = response.data;
    if (success) setUsers(data);

    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="card">
      <h5 className="card-header">Players: {users.length}</h5>

      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Affilate</th>
              <th>Link</th>
              <th>Status</th>
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
                users.length > 0 ? (
                  users.map((user, i) => (
                    <tr key={i}>
                      <td>
                        <i className="fab fa-angular fa-lg text-danger me-3"></i>
                        <strong>{user.name}</strong>
                      </td>
                      <td>
                        {
                          user.affiliate ? user.affiliate : "not invited"
                        }
                      </td>
                      <td>{user.aff_link}</td>
                      <td>
                        {
                          user.status === 1 ?
                            <span className="badge bg-label-primary me-1">Active</span>
                            :
                            user.status === 3 ?
                              <span className="badge bg-label-warning me-1">Admin</span>
                              :
                              <span className="badge bg-label-danger me-1">Blocked</span>
                        }
                      </td>
                      <td>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu">
                            <Link className="dropdown-item" to=""><i className="bx bx-edit-alt me-1"></i> Edit</Link>
                            <Link className="dropdown-item" to=""><i className="bx bx-trash me-1"></i> Delete</Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td style={{ textAlign: "center" }} colSpan={5}>No User found</td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
