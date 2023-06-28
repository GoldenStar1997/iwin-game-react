import React from 'react'
import { useSelector } from 'react-redux';



export default function Modal() {

  const games = useSelector((state) => state.game.gameList);

  return (
    <>
      {/* Invite A Person */}
      <div className="modal fade" id="inviteModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Invite Modal</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="nameBasic" className="form-label">Email</label>
                  <input type="email" id="nameBasic" className="form-control" placeholder="Enter Email" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Tournament */}

      <div className="modal fade" id="createTourModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create A Tournament</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" id="title" className="form-control" placeholder="Enter Title" />
                </div>
              </div>
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="game" className="form-label">Game</label>
                  <select type="text" id="game" className="form-control" placeholder="Select Game">
                    {
                      games.map((game, i) =>
                        <option value={game.name} key={i} className=''>{game.name}</option>
                      )
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>

      {/* Add new game */}

      <div className="modal fade" id="newGameModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Upload New Game</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" id="title" className="form-control" placeholder="Enter Title" />
                </div>
              </div>
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="game" className="form-label">Game</label>
                  <select type="text" id="game" className="form-control" placeholder="Select Game">
                    {
                      games.map((game, i) =>
                        <option value={game.name} key={i} className=''>{game.name}</option>
                      )
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
