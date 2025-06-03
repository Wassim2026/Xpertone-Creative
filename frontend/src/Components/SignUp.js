import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Signup = ({ showAlert }) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/auth/createuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();

      if (json.success) {
        localStorage.setItem('token', json.token);
        showAlert('Account created successfully!', 'success');
        navigate('/');
      } else {
        showAlert('Failed to create account', 'danger');
      }
    } catch (err) {
      console.error(err);
      showAlert('Something went wrong', 'danger');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      <div className="container py-5">
        <h1 className="text-center text-light fw-bold mb-4">
          <FontAwesomeIcon icon={faUserPlus} className="me-2" bounce />
          Create New Account
        </h1>

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="glass-card p-4 animate_animated animate_fadeIn">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light-subtle">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      className="form-control rounded-end"
                      name="name"
                      placeholder="Your full name"
                      value={credentials.name}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

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
                      placeholder="example@email.com"
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
                      placeholder="Minimum 5 characters"
                      value={credentials.password}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-success w-100 fw-bold rounded-pill shadow">
                  <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;