
import { Routes, Route, Navigate, BrowserRouter  } from "react-router-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import Login from "./pages/login/login.jsx";

import store from "./redux/reducer/store.ts";

import "./index.css";


// import App from './App.jsx'

createRoot(document.getElementById('root') as HTMLElement).render(

  <Provider store={store}>
    <BrowserRouter  basename={"/"}>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login/*" element={<Login />} />
      {/*   <Route path="/page404/*" element={<Page404App />} /> */}
    </Routes>
    </BrowserRouter>
  </Provider>,
)
