/* eslint-disable react/prop-types */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from 'axios';
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Logo from '../../assets/images/logo.png';
import { validateFormOne, validateFormTwo, validateFormThree, backendURLs } from '../../Helpers';

class QuestionPage extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      formTwo: false,
      formThree: false,

      symptoms: '',
      cough: '',
      shortness: '',
      throat: '',
      congestion: '',
      hoarse: '',
      swallowing: '',
      disorder: '',
      vomiting: '',
      malaise: '',
      chills: '',
      headache: '',
      travelled: '',
      fever: '',
      illness: '',

      symptomsClass: '',
      coughClass: '',
      shortnessClass: '',
      throatClass: '',
      congestionClass: '',
      hoarseClass: '',
      swallowingClass: '',
      disorderClass: '',
      vomitingClass: '',
      malaiseClass: '',
      chillsClass: '',
      headacheClass: '',
      travelledClass: '',
      feverClass: '',
      illnessClass: '',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    for (const key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value, result: '' });
        } catch (e) {
          this.setState({ [key]: value, result: '' });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (const key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  nextFormTwo(key) {
    key.preventDefault();
    const { symptomsClass, coughClass, shortnessClass, throatClass, congestionClass, hoarseClass, error, result } = validateFormOne(this.state);

    if (error === 'error') {
      this.setState({ symptomsClass, coughClass, shortnessClass, throatClass, congestionClass, hoarseClass, result });
      return;
    }

    this.setState({ formTwo: true });
  }

  nextFormThree(key) {
    key.preventDefault();
    const { swallowingClass, disorderClass, vomitingClass, malaiseClass, chillsClass, headacheClass, error, result } = validateFormTwo(this.state);

    if (error === 'error') {
      this.setState({ swallowingClass, disorderClass, vomitingClass, malaiseClass, chillsClass, headacheClass, result });
      return;
    }

    this.setState({ formTwo: false, formThree: true, });
  }

  submitForms(key) {
    key.preventDefault();
    const { travelledClass, feverClass, illnessClass, error, result } = validateFormThree(this.state);

    if (error === 'error') {
      this.setState({ travelledClass, feverClass, illnessClass, result });
      return;
    }

    this.setState({ formTwo: false, formThree: true, result: 'Loading ● ● ●' });
    this.saveTest(key);
  }

  saveTest(key) {
    key.preventDefault();
    const {
      symptoms,
      cough,
      shortness,
      throat,
      congestion,
      hoarse,
      swallowing,
      disorder,
      vomiting,
      malaise,
      chills,
      headache,
      travelled,
      fever,
      illness,
    } = this.state;
    axios.post(`${backendURLs.BACKEND_URL}/test-covid-questions/${this.props.match.params.email}`, {
      symptoms,
      cough,
      shortness,
      throat,
      congestion,
      hoarse,
      swallowing,
      disorder,
      vomiting,
      malaise,
      chills,
      headache,
      travelled,
      fever,
      illness,
    })
      .then((response) => {
        sessionStorage.setItem('result', response.data.message);
        setTimeout(() => {
          this.props.history.push('/questions-submitted');
        }, 500);
      })
      .catch((error) => {
        toast.error(`${error.response.data.error || error.response.data.data}`);
        this.setState({ result: error.response.data.error || error.response.data.data });
      });
  }

  handleChange(key) {
    this.setState({
      result: '',
      symptomsClass: '',
      coughClass: '',
      shortnessClass: '',
      throatClass: '',
      congestionClass: '',
      hoarseClass: '',
      swallowingClass: '',
      disorderClass: '',
      vomitingClass: '',
      malaiseClass: '',
      chillsClass: '',
      headacheClass: '',
      travelledClass: '',
      feverClass: '',
      illnessClass: '',
      [key.target.id]: key.target.value,
    });

    // saves if component has a chance to unmount
    window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  render() {
    const {
      result,
      formTwo,
      formThree,

      symptoms,
      cough,
      shortness,
      throat,
      congestion,
      hoarse,
      swallowing,
      disorder,
      vomiting,
      malaise,
      chills,
      headache,
      travelled,
      fever,
      illness,

      symptomsClass,
      coughClass,
      shortnessClass,
      throatClass,
      congestionClass,
      hoarseClass,
      swallowingClass,
      disorderClass,
      vomitingClass,
      malaiseClass,
      chillsClass,
      headacheClass,
      travelledClass,
      feverClass,
      illnessClass,
    } = this.state;

    return (
      <div>

        <Helmet>
          <style>{'body { background-color: rgb(175, 3, 3); }'}</style>
        </Helmet>

        <ToastContainer />
        <div className="question-page">

          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="right-container">

            <div className="form-container">

              <h2>COVID Screening Questionnaire</h2>
              <div>We ready ):</div>

              <div className="form">

                {
                  formTwo === true
                    ? (
                      <div className="section-two">

                        <h5>Section B</h5>

                        <div className="form-option">
                          <select className={swallowingClass} id="swallowing" onChange={(id) => this.handleChange(id)} value={swallowing}>
                            <option value="">Difficulty swallowing ?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>

                        <div className="form-option">
                          <select className={disorderClass} id="disorder" onChange={(id) => this.handleChange(id)} value={disorder}>
                            <option value="">New smell or taste disorder(s) ?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>

                        <div className="form-option">
                          <select className={vomitingClass} id="vomiting" onChange={(id) => this.handleChange(id)} value={vomiting}>
                            <option value="">Nausea/vomiting, diarrhea, abdominal pain ?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>

                        <div className="form-option">
                          <select className={malaiseClass} id="malaise" onChange={(id) => this.handleChange(id)} value={malaise}>
                            <option value="">Unexplained fatigue/malaise ?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>

                        <div className="form-option">
                          <select className={chillsClass} id="chills" onChange={(id) => this.handleChange(id)} value={chills}>
                            <option value="">Chills ?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>

                        <div className="form-option">
                          <select className={headacheClass} id="headache" onChange={(id) => this.handleChange(id)} value={headache}>
                            <option value="">Headache ?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>

                        <div className="form-status">
                          {result}
                        </div>

                        <div className="form-option">
                          <input type="submit" value="Next" className="button-input" onClick={(key) => { this.nextFormThree(key); }} />
                        </div>

                      </div>
                    )
                    : formThree === true
                      ? (
                        <div className="section-three">

                          <h5>Section C</h5>

                          <div className="form-option">
                            <select className={travelledClass} id="travelled" onChange={(id) => this.handleChange(id)} value={travelled}>
                              <option value="">Have you travelled outside of Canada ?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>

                          <div className="form-option">
                            <select className={feverClass} id="fever" onChange={(id) => this.handleChange(id)} value={fever}>
                              <option value="">Do you have a fever ?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>

                          <div className="form-option">
                            <select className={illnessClass} id="illness" onChange={(id) => this.handleChange(id)} value={illness}>
                              <option value="">Have you had close contact with COVID patient ?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>

                          <div className="form-status">
                            {result}
                          </div>

                          <div className="form-option">
                            <input type="submit" value="Submit" className="button-input" onClick={(key) => { this.submitForms(key); }} />
                          </div>

                        </div>
                      )
                      : (
                        <div className="section-one">

                          <h5>Section A</h5>

                          <div className="form-option">
                            <select className={symptomsClass} id="symptoms" onChange={(id) => this.handleChange(id)} value={symptoms}>
                              <option value="">Do you have any of the symptoms or signs ?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>

                          <div className="form-option">
                            <select className={coughClass} id="cough" onChange={(id) => this.handleChange(id)} value={cough}>
                              <option value="">New or worsening cough ?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>

                          <div className="form-option">
                            <select className={shortnessClass} id="shortness" onChange={(id) => this.handleChange(id)} value={shortness}>
                              <option value="">Shortness of breath ?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>

                          <div className="form-option">
                            <select className={throatClass} id="throat" onChange={(id) => this.handleChange(id)} value={throat}>
                              <option value="">Sore throat ?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>

                          <div className="form-option">
                            <select className={congestionClass} id="congestion" onChange={(id) => this.handleChange(id)} value={congestion}>
                              <option value="">Runny nose, sneezing or nasal congestion ?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>

                          <div className="form-option">
                            <select className={hoarseClass} id="hoarse" onChange={(id) => this.handleChange(id)} value={hoarse}>
                              <option value="">Hoarse voice ?</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>

                          <div className="form-status">
                            {result}
                          </div>

                          <div className="form-option">
                            <input type="submit" value="Next" className="button-input" onClick={(key) => { this.nextFormTwo(key); }} />
                          </div>

                        </div>
                      )
                }

              </div>

            </div>

          </div>

          <div className="left-container" />

        </div>
      </div>
    );
  }
}

export default QuestionPage;
