import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./user/home/Home";
import Category from "./user/category/Category";

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
        <Route path="/category/:id" Component={Category} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
