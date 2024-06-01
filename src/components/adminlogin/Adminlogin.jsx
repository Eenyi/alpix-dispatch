import React from "react";
import "./adminlogin.css";
import { useSelector } from "react-redux";
import { toggleLogin } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Fetch from "../../resources/fetch";
import apiRoutes from "../../resources/apiUrls";
import { storeToken } from "../../resources/authHelper";
import store, {
  showAlert,
} from '../../redux/store'

export default function Adminlogin() {
  const loginVisible = useSelector((state) => state.isLoginVisible);
  const dispatch = useDispatch();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [log, setLog] = useState("");
  function submitLoginInfo(e) {
    e.preventDefault();
    if (Username !== "" && Password !== "") {
      Fetch(apiRoutes.VALIDATE_LOGIN, "post",
        JSON.stringify({ username: Username, password: Password }),
        "json"
      ).then((response) => {
        if (response?.status) {
          dispatch(toggleLogin());
          storeToken("alpix_idm_token", response?.token);
          setLog(response.message);
        } else {
          setLog(response.error);
        }
      });
    }
  }
  function handleForgetCreds() {
    dispatch(toggleLogin());
    store.dispatch(showAlert({
      alertDisplay: true,
      alertType: "message",
      alertText: "Generating credentials Recovery Token..."
    }))
    Fetch(apiRoutes.FORGET_CREDS, "get").then(
      (response) => {
        store.dispatch(showAlert({
          alertDisplay: true,
          alertType: "message",
          alertText: response?.message,
        }))
      }
    )
  }
  return (
    <>
      {loginVisible && (
        <div className="wp-otr-bpomenu">
          <div className="wp-otr-contact-info-card animate__animated animate__zoomIn">
            <div className="wp-inr-contact-info-card wp-height">
              <h1>Admin Login</h1>
              <br />
              <form action="" method="post" onSubmit={submitLoginInfo}>
                <input
                  type="text"
                  name="adusername"
                  placeholder="User Name"
                  value={Username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setLog("");
                  }}
                  required
                />
                <input
                  type="password"
                  name="adpassword"
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setLog("");
                  }}
                  required
                />
                <br />
                <input type="submit" value="Login" />
              </form>
              <span onClick={handleForgetCreds} className="wp-otp-creds animate__animated">Forget Credientials</span>
              <span className="wp-otp-message animate__animated">{log}</span>
            </div>
            <div className="bpomenu-cancel">
              <button
                onClick={() => dispatch(toggleLogin())}
                className="animate__animated animate__rubberBand"
              >
                ❌
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
