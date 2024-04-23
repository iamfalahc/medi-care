import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./user/home/Home";
import Category from "./user/category/Category";
import Specialties from "./user/specialties/Specialties";
import Medicines from "./user/medicines/Medicines";
import Form from "./user/form/Form";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/login" Component={Login} />
          </Route>
          <Route>
            <Route path="/signup" Component={Signup} />
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
            <Route path="/form" Component={Form} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
