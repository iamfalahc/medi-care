import React from "react";
import "./doctor-home.css";

const DoctorHome = () => {
  return (
    <div className="doctor-home">
      <h1>Patient's list</h1>
      <table>
        <thead>
          <tr>
            <th className="token">Token</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Place</th>
            <th className="mobile-number">Mobile number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="token">1</td>
            <td>Bobi</td>
            <td>22</td>
            <td>Male</td>
            <td>Kollam</td>
            <td className="mobile-number">9876543210</td>
          </tr>
          <tr>
            <td className="token">1</td>
            <td>Manu</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            <td className="mobile-number">9889547812</td>
          </tr>
          <tr>
            <td className="token">1</td>
            <td>Suresh</td>
            <td>22</td>
            <td>Male</td>
            <td>Kollam</td>
            <td className="mobile-number">9876543210</td>
          </tr>
          <tr>
            <td className="token">1</td>
            <td>Anju</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            <td className="mobile-number">9889547812</td>
          </tr>
          <tr>
            <td className="token">1</td>
            <td>Rahul</td>
            <td>22</td>
            <td>Male</td>
            <td>Kollam</td>
            <td className="mobile-number">9876543210</td>
          </tr>
          <tr>
            <td className="token">1</td>
            <td>Anu</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            <td className="mobile-number">9889547812</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DoctorHome;
