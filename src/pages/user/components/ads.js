import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { API_URL } from '../../../utils/url';

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
    <div id='ads-container' className='fadeInUp'>
      <iframe className='fadeInUp' src={adUrl} onClick={handleAdClick} frameBorder='0' scrolling='no' width="728" height="90" title='banner ads'></iframe>
      <iframe className='fadeInUp' src={adUrl} onClick={handleAdClick} frameBorder='0' scrolling='no' width="728" height="90" title='banner ads'></iframe>
    </div>
  )
}