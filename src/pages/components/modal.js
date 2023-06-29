import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Modal() {
  const [data, setData] = useState({});

  const getData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  return (
    <>

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
    </>
  );
}