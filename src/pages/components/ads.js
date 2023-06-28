import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { API_URL } from '../../utils/url';

export default function Ads() {
  const {
    name,
  } = useSelector((state) => state.auth.userInfo);

  const [adUrl, setAdUrl] = useState("//www.profitabledisplaynetwork.com/watchnew?key=dfb94e6dfb8eee4fafd231cfe6551041&_=" + Date.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAdUrl(adUrl => adUrl.replace(/_=\d+/, "_=" + Date.now()));
    }, 7500);
    return () => clearInterval(intervalId);
  }, []);

  const handleAdClick = async () => {
    await axios.post(
      `${API_URL}/user/setAdsClks`,
      { name: name }
    )
  }

  return (
    // <iframe src={adUrl} onClick={handleAdClick} frameBorder='0' scrolling='no' width="" height="" title='banner ads'></iframe>
    // <iframe src={adUrl} onClick={handleAdClick} frameBorder='0' scrolling='no' width="" height="" title='banner ads'></iframe>
    <div className='row' id='ads-container'>
      <div className='col-md-5'>
        <iframe id="inlineFrameExample"
          title="Inline Frame Example"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
        </iframe>

      </div>
      <div className='col-md-2'>
        <div className="card">
          <img className="card-img" src="./assets/img/elements/result-img-3.png" alt="Card" style={{ height: "10vh" }} />
        </div>  
      </div>
      <div className='col-md-5'>
        <iframe id="inlineFrameExample"
          title="Inline Frame Example"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
        </iframe>
      </div>
    </div>
  )
}