import React from "react";
import "./doctor-home.css";

const DoctorHome = () => {
  return (
    <div className="doctor-home">
      <h1>Patient's list</h1>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Place</th>
            <th>Mobile number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bobi</td>
            <td>22</td>
            <td>Male</td>
            <td>Kollam</td>
            <td>9876543210</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Manu</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            <td>9889547812</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Suresh</td>
            <td>22</td>
            <td>Male</td>
            <td>Kollam</td>
            <td>9876543210</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anju</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            <td>9889547812</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Rahul</td>
            <td>22</td>
            <td>Male</td>
            <td>Kollam</td>
            <td>9876543210</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anu</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            <td>9889547812</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DoctorHome;
