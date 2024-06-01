import React from "react";
import Canvas from "./components/canvas/Canvas";
import Header from "./components/header/Header";
import BpoServiceMenu from "./components/bposervicemenu/BpoServiceMenu";
import "animate.css";
import Tailpopup from "./components/Tailpopup/Tailpopup";
import Contactinfocard from "./components/contactinfocard/Contactinfocard";
import Admin from "./pages/admin/Admin";
import Adminlogin from "./components/adminlogin/Adminlogin";
// import Otp from "./components/otp/Otp";
import Alert from "./components/alert/Alert";
import { useSelector } from "react-redux";
import isLoggedIn from "./resources/authHelper";

function App() {
  const alertDisplay = useSelector((state) => state?.alertDisplay);

  return (
    <>
      {alertDisplay && <Alert />}
      {isLoggedIn() ? (
        <>
          <Admin />
        </>
      ) : (
        <>
          <Adminlogin />
          <Contactinfocard />
          <Tailpopup />
          <BpoServiceMenu />
          <Header />
          <Canvas />
        </>
      )}
    </>
  );
}

export default App;
