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
            <Route path="/medicine" Component={Medicines} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
