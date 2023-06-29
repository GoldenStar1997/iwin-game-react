import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../../utils/url';
import axios from 'axios';

export default function Modal() {
  const [data, setData] = useState({});

  const games = useSelector((state) => state.game.gameList);

  const getData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  const saveGame = async () => {
    const formData = new FormData();
    formData.append('name', data.game_name);
    formData.append('alias', data.game_alias);
    formData.append('file', data.game_file);

    const response = await axios.post(`${API_URL}/admin/addNewGame`, formData);
    const { success } = response.data;
    if (success) window.location.reload(true)
  };

  const createTournament = () => {
    // TODO: Implement create tournament logic
  };

  const sendInvite = () => {
    // TODO: Implement send invite logic
  };

  return (
    <>
      {/* Invite A Person */}

      <div className="modal fade" id="inviteModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Invite Person</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="invite_email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={(e) => getData(e)}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              {data.invite_email && data.invite_email.indexOf('@') !== -1 ? (
                <Link to={`mailto:${data.invite_email}?subject={subject}&body={body}`} type="button" className="btn btn-primary">
                  Send
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Add new game */}

      <div className="modal fade" id="newGameModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Upload New Game</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="col mb-3">
                <label className="form-label">Name</label>
                <input
                  name="game_name"
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  onChange={(e) => getData(e)}
                />
              </div>
              <div className="col mb-3">
                <label className="form-label">Alias</label>
                <input
                  name="game_alias"
                  type="text"
                  className="form-control"
                  placeholder="Enter Alias"
                  onChange={(e) => getData(e)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Source File</label>
                <input name="game_file" className="form-control" type="file" onChange={(e) => getData(e)} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              {data.game_name && data.game_file ? (
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => saveGame()}>
                  Save
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Create Tournament */}

      <div className="modal fade" id="createTourModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create A Tournament</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="col mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" placeholder="Enter Title" />
              </div>
              <div className="col mb-3">
                <label className="form-label">Game</label>
                <select type="text" className="form-control" placeholder="Select Game">
                  {games.map((game, i) => (
                    <option value={game.name} key={i} className="">
                      {game.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-primary" onClick={() => createTournament()}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}