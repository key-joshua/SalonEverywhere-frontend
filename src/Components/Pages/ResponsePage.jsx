/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Logo from '../../assets/images/logo.png';

class ResponsePage extends Component {
  componentDidMount() {
    if (sessionStorage.getItem('result')) {
      toast.info(`${sessionStorage.getItem('result')}`);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <style>{' height: 100vh; position: relative; background-size: cover; background: rgb(255, 255, 255); background-color: rgb(175, 3, 3);'}</style>
        </Helmet>

        <ToastContainer />

        <div className="response-page">

          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="right-container">

            <div className="form-container">

              <div className="content-container">
                <h2>COVID Screening Questionnaire</h2>

                <h3>Find Local Beauty Services</h3>

                <p>
                  Register to access our community of Salon, Spa
                  <br />
                  & Barber
                  Pros working in private and traditional venues.
                  <br />
                  <span>Your Pro, Your Venue, Your Choice.</span>
                </p>

                <div className="form-status">
                  {sessionStorage.getItem('result') || 'Ohps something wrong occured'}
                </div>

              </div>

            </div>

          </div>

          <div className="left-container" />

        </div>
      </div>
    );
  }
}

export default ResponsePage;
