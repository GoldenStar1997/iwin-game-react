import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/url';

export default function AddGame() {

  const [data, setData] = useState({});


  const getData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const uploadImg = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }

    const response = await axios.post(`${API_URL}/upload`, formData);
    const { res } = response.data;

    const img = document.querySelector('#gameImg');
    img.src = `${API_URL}/images/${res}`;

    setData({ ...data, image: res });
  };

  const uploadGame = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('game', files[i]);
    }

    const response = await axios.post(`${API_URL}/upload`, formData);
    const { res } = response.data;

    setData({ ...data, filename: res });
  }

  const saveGame = async () => {
    const response = await axios.post(`${API_URL}/admin/addNewGame`, data);
    const { success } = response.data;
    if (success) window.location.reload(true)
  };



  return (
    <>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                <h5 className="card-header">Add New Game</h5>
                <hr className="my-0" />
                <div className="card-body">

                  <form >
                    <div className="row">
                      <div className='mb-3 col-md-4'>
                        <div className="">
                          <img
                            id="gameImg"
                            src="../assets/img/backgrounds/18.jpg"
                            alt="user-avatar"
                            className="d-block rounded mb-3 w-100"
                          />
                          <div className="">
                            <label className="btn btn-primary mb-4 w-100">
                              <span className="d-none d-sm-block" >Upload Image</span>
                              <i className="bx bx-upload d-block d-sm-none"></i>
                              <input
                                onChange={(e) => uploadImg(e)}
                                type="file"
                                className="account-file-input"
                                hidden
                                multiple=""
                                accept="image/png, image/jpeg"
                              />
                            </label>

                            <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 col-md-8">
                        <div className='mb-3'>
                          <label className="form-label">Name</label>
                          <input
                            className="form-control"
                            onChange={(e) => getData(e)}
                            type="text"
                            name="name"
                            placeholder=""
                            autoFocus
                          />
                        </div>
                        <div className='mb-3'>
                          <label className="form-label">Alias</label>
                          <input
                            className="form-control"
                            onChange={(e) => getData(e)}
                            type="text"
                            name="alias"
                            placeholder=""
                          />
                        </div>
                        <div className='mb-3'>
                          <label className="form-label">Source</label>
                          <input
                            onChange={(e) => uploadGame(e)}
                            type="file"
                            className="form-control"
                            aria-describedby="inputGroupFileAddon04"
                            aria-label="Upload"
                            accept=".rar,.zip"
                          />
                          <p className="text-muted mt-3">Allowed RAR or ZIP. Max size of 500M</p>
                        </div>
                        <div className='mb-3'>
                          <label className="form-label">Summary</label>
                          <textarea
                            className="form-control"
                            rows={4}
                            aria-label="With textarea"
                            name="summary"
                            onChange={(e) => getData(e)}
                          >
                          </textarea>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2" style={{ float: 'right' }}>


                      <button type="submit" className="btn btn-primary me-2" onClick={() => saveGame()}>Save changes</button>

                      <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div >
          </div >
        </div >
      </div >
    </>
  )
}
