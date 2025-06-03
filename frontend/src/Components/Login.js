import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEnvelope, faLock, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsLoggedIn(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem('token', json.token);
        setIsLoggedIn(true);
        props.showAlert("Login Success", "success");
        navigate('/');
      } else {
        setError(json.error);
        props.showAlert("Invalid credentials", "danger");
      }
    } catch (error) {
      console.error(error);
      props.showAlert("Error occurred", "danger");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
    props.showAlert("Logout Success", "success");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      <div className="container py-5">
        <h1 className="text-center text-light fw-bold mb-4">
          <FontAwesomeIcon icon={faBagShopping} className="me-2" bounce />
          Xpertone Creative
        </h1>

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="glass-card p-4 animate_animated animate_fadeIn">
              {isLoggedIn ? (
                <div className="text-center">
                  <FontAwesomeIcon icon={faRightToBracket} size="2x" className="text-success mb-3" />
                  <p className="fs-5 text-success fw-semibold mb-4">You're already logged in.</p>
                  <button className="btn btn-danger w-100 rounded-pill fw-semibold" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-center mb-4 fw-bold text-dark">
                    <FontAwesomeIcon icon={faRightToBracket} className="me-2 text-primary" />
                    Login to Your Account
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light-subtle">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input
                          type="email"
                          className="form-control rounded-end"
                          name="email"
                          placeholder="Enter email"
                          value={credentials.email}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-light-subtle">
                          <FontAwesomeIcon icon={faLock} />
                        </span>
                        <input
                          type="password"
                          className="form-control rounded-end"
                          name="password"
                          placeholder="Enter password"
                          value={credentials.password}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="alert alert-danger text-center">{error}</div>
                    )}

                    <button type="submit" className="btn btn-primary w-100 fw-bold rounded-pill shadow">
                      <FontAwesomeIcon icon={faRightToBracket} className="me-2" />
                      Login
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;