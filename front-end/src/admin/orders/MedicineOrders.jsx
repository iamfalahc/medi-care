import React from 'react'
import AdminNavbar from '../../components/admin-navbar/AdminNavbar'
import "./medicine-order.css"
import Footer from '../../components/footer/Footer'

const MedicineOrders = () => {
  return (
    <div>
      <AdminNavbar/>
      <div className="medicine-order">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Product Name</th>
            <th>Buyer</th>
            <th>Address</th>
            <th>Place</th>
            <th>Pin</th>
            <th>Mobile</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bobi</td>
            <td>22</td>
            <td>1</td>
            <td>Bobi</td>
            <td>22</td>
            <td>Male</td>
            <td><svg className='block-svg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c30404"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.63605 18.364L18.364 5.63603M5.63605 5.63603L18.364 18.364M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#da0101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Manu</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            
          </tr>
          <tr>
            <td>1</td>
            <td>Suresh</td>
            <td>22</td>
            <td>Male</td>
            <td>Kollam</td>
            <td>22</td>
            <td>Male</td>
            <td>Kollam</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anju</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            
          </tr>
          <tr>
            <td>1</td>
            <td>Rahul</td>
            <td>22</td>
            <td>Male</td>
            <td>Kollam</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Anu</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            
          </tr>
          <tr>
            <td>1</td>
            <td>Anu</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            
          </tr>
          <tr>
            <td>1</td>
            <td>Anu</td>
            <td>17</td>
            <td>Female</td>
            <td>Cochi</td>
            
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default MedicineOrders
