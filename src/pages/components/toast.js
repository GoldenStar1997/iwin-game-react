import React, { useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from '../../reducers/alertSlice';

export default function Alert() {
  const { show, info, time, cls, title } = useSelector((state) => state.alert.info);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setInfo({
      show: false
    }));
  };

  return (
    <Toast className={cls} show={show} onClose={handleClose}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{title}</strong>
        <small>{time}</small>
      </Toast.Header>
      <Toast.Body>{info}</Toast.Body>
    </Toast>
  );
}