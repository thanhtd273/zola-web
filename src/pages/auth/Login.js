import React, { useEffect, useState } from "react";

import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import axios from "axios";

import * as APIs from "../../constants/APIs";
import { getCacheData, setCacheData } from "../../utils/helper";
import * as CONSTANTS from "../../constants";
import { useNavigate } from "react-router-dom";
import { PREFIX } from "../../constants/Global";

const AuthForm = () => {
  const [input, setInput] = useState({ phone: "", password: "" });
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChangePhone = (e) => {
    e.preventDefault();
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInput({ ...input, phone: value });
  };

  const onChangePassword = (e) => {
    e.preventDefault();
    setInput({ ...input, password: e.target.value });
  };

  const handleLogin = async () => {
    setLoading(true);
    await axios({
      method: "POST",
      url: APIs.LOGIN,
      data: input,
    })
      .then((res) => {
        console.log(res);
        setCacheData(res.data.data.token, CONSTANTS.AUTH_TOKEN);
        setCacheData(res.data.data.userProfile);
        setToken(res.data.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    if (token) return navigate(PREFIX + "/");
  }, [token]);

  if (loading) return <ProgressSpinner />;

  return (
    <div className="zLogin-layout">
      <div className="header">
        <h1>Zola</h1>
        <h2>
          <span>
            Xác minh tài khoản Zola <br /> để kết nối với ứng dụng Zola Web
          </span>
        </h2>
      </div>
      <div className="body">
        <div className="animated fadeIn body-container">
          <div>
            <TabView activeIndex={1}>
              <TabPanel header="With QR code">
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </TabPanel>
              <TabPanel className="center" header="With password">
                <div className="form-signin center col">
                  <span className="p-input-icon-left" style={{ width: "100%" }}>
                    <i className="pi pi-mobile"></i>
                    <InputText
                      className="input"
                      placeholder="Phone number"
                      onChange={onChangePhone}
                      value={input.phone}
                    />
                  </span>
                  <span className="p-input-icon-left" style={{ width: "100%" }}>
                    <i className="pi pi-lock"></i>
                    <InputText
                      className="input"
                      placeholder="Password"
                      onChange={onChangePassword}
                      value={input.password}
                      type="password"
                    />
                  </span>
                  <Button
                    className="btn .btn--m"
                    label="Login with password"
                    disabled={input.phone <= 6 || !input.password}
                    onClick={handleLogin}
                  />
                  <Button
                    className="btn .btn--m btn-default"
                    label="Sign in with mobile device"
                    disabled={input.phone <= 6 || !input.password}
                  />
                  <Button link label="Forgot password?" />
                </div>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
