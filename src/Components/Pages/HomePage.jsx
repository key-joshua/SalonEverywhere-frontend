/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from 'axios';
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Logo from '../../assets/images/logo.png';
import { validateEmailForm, backendURLs } from '../../Helpers';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      email: '',
      emailClass: '',
    };
  }

  submitForm(key) {
    key.preventDefault();
    const { emailClass, error, result } = validateEmailForm(this.state);

    if (error === 'error') {
      this.setState({ emailClass, result });
      return;
    }

    this.setState({ formTwo: false, formThree: true, result: 'Loading ● ● ●' });
    this.saveUser(key);
  }

  handleChange(key) {
    this.setState({
      result: '',
      emailClass: '',
      [key.target.id]: key.target.value,
    });
  }

  saveUser(key) {
    key.preventDefault();
    const { email } = this.state;
    axios.post(`${backendURLs.BACKEND_URL}/save-user`, { email })
      .then((response) => {
        toast.info(`${response.data.message || response.data.message}`);
        this.setState({ result: response.data.message });
      })
      .catch((error) => {
        toast.error(`${error.response.data.error || error.response.data.data}`);
        this.setState({ result: error.response.data.data || error.response.data.error });
      });
  }

  render() {
    const {
      result,
      email,
      emailClass,
    } = this.state;

    return (
      <div>
        <Helmet>
          <style>{'body { background-color: #ffff;}'}</style>
        </Helmet>

        <ToastContainer />

        <div className="home-page">

          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="container">

            <div className="content-container">

              <h1>Find Local Beauty Services</h1>

              <p>
                Register to access our community of Salon, Spa & Barber
                Pros working in private and traditional venues.
                <span>Your Pro, Your Venue, Your Choice.</span>
              </p>

              <h3>Welcome to SalonEverywhere Pre-Appointment COVID Screening Tool, Please Get Start</h3>

              <div className="submit-form">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  className={`${emailClass} input-field`}

                  value={email}
                  onChange={(id) => this.handleChange(id)}
                />
                <input type="submit" value="submit" className="button-input" onClick={(key) => { this.submitForm(key); }} />
              </div>

              <div className="form-status">
                {result}
              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default HomePage;
