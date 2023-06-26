import React, { useEffect, useState } from "react";
import axios from 'axios';
import $ from 'jquery'
import { API_URL } from '../../../utils/url';

function Affiliate() {

  const [formData, setFormData] = useState({});
  const getOldDB = async () => {
    const response = await axios.post(`${API_URL}/admin/getAffShare`);
    const { success, data } = response.data;

    if (success) setFormData(data[0]);
  }


  const inputs = [
    {
      name: "aff_shr",
      label: "Affiliate Revenue Share(%)",
    },
    {
      name: "sup_shr",
      label: "Super Affiliate's Share(%)",
    },
    {
      name: "sub_shr",
      label: "Sub Affiliate's Share(%)",
    },
  ];

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setFormData({ ...formData, [key]: value });

    switch (key) {
      case "aff_shr":
        $('#A1').html(value);
        break;
      case "sup_shr":
        $('#B1').html(value);
        $('#B2').html(formData.aff_shr - value);
        $('#A2').html(formData.aff_shr - value);
        break;
      case "sub_shr":
        $('#C1').html(value);
        $('#A3').html(formData.sup_shr - value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${API_URL}/admin/setAffShare`, formData);
    const { success } = response.data;
    if (success) {
      alert("Data sent successfully");
    } else {
      alert("Failed to send data");
    }
  };

  useEffect(() => {
    getOldDB()
  }, [])

  return (
    <div className="row">
      <div className="col-md-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Affiliates' Share</label>
            {inputs.map((field, i) => (
              <input
                className="form-control" key={i}
                type="number" min={1} max={50}
                placeholder={field.label}
                onChange={(e) => handleInputChange(e, field.name)}
              />
            ))}
          </div>
          <div className="" style={{ marginLeft: "17px" }}>
            <label> Preview </label>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">aff_shr</th>
                  <th scope="col">sup_shr</th>
                  <th scope="col">sub_shr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td id="A1">-</td>
                  <td id="A2">-</td>
                  <td id="A3">-</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td id="B1">-</td>
                  <td id="B2">-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td id="C1">-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Affiliate;