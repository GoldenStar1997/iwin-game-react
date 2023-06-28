import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../../utils/url'
import { Link } from 'react-router-dom'


export default function Games() {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const getGames = async function () {
    setLoading(true);

    const response = await axios
      .post(`${API_URL}/admin/getGames`);

    const { success, data } = response.data;
    if (success) setGames(data);

    setLoading(false);
  };

  useEffect(() => {
    getGames();
  }, [])

  return (
    <>
      <div className="card">
        <div className='card-header'>
          <div style={{ float: "right" }}>
            <button type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#newGameModal"
            >
              Add New Game
            </button>
          </div>
          <h5>Games: {games.length}</h5>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Alias</th>
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
                  games.length > 0 ? (
                    games.map((game, i) => (
                      <tr key={i}>
                        <td>
                          <i className="fab fa-angular fa-lg text-danger me-3"></i>
                          <strong>{game.name}</strong>
                        </td>
                        <td>{game.alias}</td>
                        <td>{game.url}</td>
                        <td>
                          {
                            game.status === 1 ?
                              <span className="badge bg-label-primary me-1">Active</span>
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
                      <td style={{ textAlign: "center" }} colSpan={5}>No Game found</td>
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
