import React from 'react'
import { Link } from 'react-router-dom'

export default function Trophies() {

  return (
    <section id="all-trophies" className="pb-120">
      <div className="container">
        <div className="tab-content">
          <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="overview-tab">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-trophies d-flex align-items-center">
                  <div className="left d-flex align-items-center justify-content-center">
                    <img src="/assets/images/trophies-icon-1.png" alt="not found" />
                  </div>
                  <div className="right">
                    <p className="text-sm">Elite Trophies</p>
                    <h4>0</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-trophies d-flex align-items-center">
                  <div className="left d-flex align-items-center justify-content-center">
                    <img src="/assets/images/trophies-icon-2.png" alt="not found" />
                  </div>
                  <div className="right">
                    <p className="text-sm">gold-trophy</p>
                    <h4>6</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-trophies d-flex align-items-center">
                  <div className="left d-flex align-items-center justify-content-center">
                    <img src="/assets/images/trophies-icon-3.png" alt="not found" />
                  </div>
                  <div className="right">
                    <p className="text-sm">silver trophy</p>
                    <h4>2</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-trophies d-flex align-items-center">
                  <div className="left d-flex align-items-center justify-content-center">
                    <img src="/assets/images/trophies-icon-4.png" alt="not found" />
                  </div>
                  <div className="right">
                    <p className="text-sm">Bronze Trophies</p>
                    <h4>5</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="statistics-area">
              <div className="row">
                <div className="col-lg-9">
                  <div className="total-area">
                    <div className="head-area d-flex justify-content-between">
                      <div className="left">
                        <h5>Game Statistics</h5>
                        <p className="text-sm">Player's game specific statistics</p>
                      </div>
                      <div className="right">
                        <p className="text-sm">Last Update: <span>3 days ago</span></p>
                      </div>
                    </div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <Link className="nav-link active" id="fortnite-tab" data-toggle="tab" to="#fortnite" role="tab" aria-controls="fortnite"
                          aria-selected="true">fortnite
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" id="warzone-tab" data-toggle="tab" to="#warzone" role="tab" aria-controls="warzone"
                          aria-selected="false">warzone
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" id="lofl-tab" data-toggle="tab" to="#lofl" role="tab" aria-controls="lofl"
                          aria-selected="false">lofl
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" id="dota-tab" data-toggle="tab" to="#dota" role="tab" aria-controls="dota" aria-selected="false">dota
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContents">
                      <div className="tab-pane fade show active" id="fortnite" role="tabpanel" aria-labelledby="fortnite-tab">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-1.png" alt="not found" />
                              <p>Tournaments Entered</p>
                              <h4>10</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-2.png" alt="not found" />
                              <p>Kills Per Game (Average)</p>
                              <h4>20</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-3.png" alt="not found" />
                              <p>Games Played League of Legends</p>
                              <h4>5</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-4.png" alt="not found" />
                              <p>Earnings (Per tournament)</p>
                              <h4>0</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="warzone" role="tabpanel" aria-labelledby="warzone-tab">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-1.png" alt="not found" />
                              <p>Tournaments Entered</p>
                              <h4>10</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-2.png" alt="not found" />
                              <p>Kills Per Game (Average)</p>
                              <h4>20</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-3.png" alt="not found" />
                              <p>Games Played League of Legends</p>
                              <h4>5</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-4.png" alt="not found" />
                              <p>Earnings (Per tournament)</p>
                              <h4>0</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="lofl" role="tabpanel" aria-labelledby="lofl-tab">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-1.png" alt="not found" />
                              <p>Tournaments Entered</p>
                              <h4>10</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-2.png" alt="not found" />
                              <p>Kills Per Game (Average)</p>
                              <h4>20</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-3.png" alt="not found" />
                              <p>Games Played League of Legends</p>
                              <h4>5</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-4.png" alt="not found" />
                              <p>Earnings (Per tournament)</p>
                              <h4>0</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="dota" role="tabpanel" aria-labelledby="dota-tab">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-1.png" alt="not found" />
                              <p>Tournaments Entered</p>
                              <h4>10</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-2.png" alt="not found" />
                              <p>Kills Per Game (Average)</p>
                              <h4>20</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-3.png" alt="not found" />
                              <p>Games Played League of Legends</p>
                              <h4>5</h4>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="single-item text-center">
                              <img src="/assets/images/statistics-icon-4.png" alt="not found" />
                              <p>Earnings (Per tournament)</p>
                              <h4>0</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="sidebar-area">
                    <div className="title-area">
                      <h5>My Statistics</h5>
                      <p className="text-sm">My Current progress</p>
                    </div>
                    <ul>
                      <li>
                        <span><img src="/assets/images/my-statistics-icon-1.png" alt="not found" />Avg. Finish Rank</span>
                        <span>313</span>
                      </li>
                      <li>
                        <span><img src="/assets/images/my-statistics-icon-2.png" alt="not found" />Total Games Played</span>
                        <span>1193</span>
                      </li>
                      <li>
                        <span><img src="/assets/images/my-statistics-icon-3.png" alt="not found" />Tournaments Played</span>
                        <span>24</span>
                      </li>
                      <li>
                        <span><img src="/assets/images/my-statistics-icon-4.png" alt="not found" />Times Paid</span>
                        <span>10</span>
                      </li>
                      <li>
                        <span><img src="/assets/images/my-statistics-icon-5.png" alt="not found" />Tournaments Won</span>
                        <span>02</span>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-area">
                    <div className="title-area">
                      <h5>Earnings</h5>
                      <p className="text-sm">My current earnings</p>
                    </div>
                    <div className="parents-area">
                      <div className="single-area d-flex align-items-center">
                        <div className="img-area d-flex align-items-center justify-content-center">
                          <img src="/assets/images/earnings-icon-1.png" alt="not found" />
                        </div>
                        <div className="right-area">
                          <span><img src="/assets/images/coin-icon.png" alt="not found" />300</span>
                          <p className="text-sm">Total Coins Earned</p>
                        </div>
                      </div>
                      <div className="single-area d-flex align-items-center">
                        <div className="img-area mid d-flex align-items-center justify-content-center">
                          <img src="/assets/images/earnings-icon-2.png" alt="not found" />
                        </div>
                        <div className="right-area">
                          <span><img src="/assets/images/coin-icon.png" alt="not found" />10</span>
                          <p className="text-sm">Average Entry Fee</p>
                        </div>
                      </div>
                      <div className="single-area d-flex align-items-center">
                        <div className="img-area last d-flex align-items-center justify-content-center">
                          <img src="/assets/images/earnings-icon-3.png" alt="not found" />
                        </div>
                        <div className="right-area">
                          <span><img src="/assets/images/coin-icon.png" alt="not found" />$473.00</span>
                          <p className="text-sm">Total Coins Earned</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-area">

                    <div className="parents-area">
                      <div className="single-area d-flex align-items-center">
                        <div className="img-area d-flex align-items-center justify-content-center">
                          <img src="/assets/images/earnings-icon-1.png" alt="not found" />
                        </div>
                        <div className="right-area">
                          <span><img src="/assets/images/coin-icon.png" alt="not found" />300</span>
                          <p className="text-sm">Coins in Ballance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
