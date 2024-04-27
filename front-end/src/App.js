import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "../src/user/login-or-signup/UserLogin";
import UserSignup from "../src/user/login-or-signup/UserSignup";
import Home from "./user/home/Home";
import Category from "./user/category/Category";
import Specialties from "./user/specialties/Specialties";
import Medicines from "./user/medicines/Medicines";
import UserForm from "./user/user-form/UserForm";
import DoctorSignUp from "./doctor/sign-up/DoctorSignUp";
import DoctorLogin from "./doctor/login/DoctorLogin";
import DoctorHome from "./doctor/home/DoctorHome";
import AdminLogin from "./admin/admin-login/AdminLogin";
import AdminHome from "./admin/admin-home/AdminHome";
import OrderForm from "./user/medicines/OrderForm"
import DoctorRequest from "./admin/doctor-requests/DoctorRequest";
import AddMedicine from "./admin/add-medicine/AddMedicine";
import MedicineOrders from "./admin/orders/MedicineOrders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/login" Component={UserLogin} />
          </Route>
          <Route>
            <Route path="/signup" Component={UserSignup} />
          </Route>
          <Route>
            <Route path="/" Component={Home} />
          </Route>
          <Route>
            <Route path="/specialty" Component={Specialties} />
          </Route>
          <Route>
            <Route path="/medicines" Component={Medicines} />
          </Route>
          <Route>
            <Route path="/medicine-order-form" Component={OrderForm} />
          </Route>
          <Route>
            <Route path="/category/:id" Component={Category} />
          </Route>
          <Route>
            <Route path="/user-form" Component={UserForm} />
          </Route>
          <Route>
            <Route path="/join as a doctor" Component={DoctorSignUp} />
          </Route>
          <Route>
            <Route path="/doctor-login" Component={DoctorLogin} />
          </Route>
          <Route>
            <Route path="/doctor-home" Component={DoctorHome} />
          </Route>
          <Route>
            <Route path="/admin-login" Component={AdminLogin} />
          </Route>
          <Route>
            <Route path="/admin-home" Component={AdminHome} />
          </Route>
          <Route>
            <Route path="/admin/doctor-requests" Component={DoctorRequest} />
          </Route>
          <Route>
            <Route path="/admin/add-medicine" Component={AddMedicine} />
          </Route>
          <Route>
            <Route path="/admin/medicine-orders" Component={MedicineOrders} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
