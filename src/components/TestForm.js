import React from 'react'
import { navigate } from 'gatsby-link'
//import Button from '../components/Button'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isValidated: false,
      showAddress: false,
      showButton: false
    };
  }

  state = {
    showAddress: false,
    showButton: false
  }
  
  showAddress(event) {
    if (event.target.value === "delivery") {
      this.setState({ showAddress: true });
    } else {
      this.setState({ showAddress: false });
    }
  }

  showButton(event) {
    /*if (typeof obj != "object" && typeof obj != "function" || obj == null)*/
    if (event.target.value === "small") {
          this.setState({ showButton: true });
          return (
          <a href="https://gocardless.com/" title="SWD">Subscribe!</a>
          )
  } else if (event.target.value === "small" &&
            event.target.value === "weekly" &&
            event.target.value === "collection") {
              this.setState(
              <a href="https://gocardless.com/" title="SWC">Subscribe!</a>
              );
  } else if (event.target.value === "small" &&
            event.target.value === "fortnightly" &&
            event.target.value === "delivery") {
              this.setState(
            <button className="button is-link" type="submit">
              <a href="https://gocardless.com/" title="SFD">Subscribe!</a>
            </button>
              );
  } else if (event.target.value === "small" &&
            event.target.value === "fortnightly" &&
            event.target.value === "collection") {
              this.setState(
            <button className="button is-link" type="submit">
              <a href="https://gocardless.com/" title="SFC">Subscribe!</a>
            </button>
              );
  } else if (event.target.value === "large" &&
            event.target.value === "weekly" &&
            event.target.value === "collection") {
              this.setState(
            <button className="button is-link" type="submit">
              <a href="https://gocardless.com/" title="LWC">Subscribe!</a>
            </button>
              );
  } else if (event.target.value === "large" &&
            event.target.value === "weekly" &&
            event.target.value === "delivery") {
              this.setState(
            <button className="button is-link" type="submit">
              <a href="https://gocardless.com/" title="LWD">Subscribe!</a>
            </button>
              );
  } else if (event.target.value === "large" &&
            event.target.value === "fortnightly" &&
            event.target.value === "collection") {
              this.setState(
            <button className="button is-link" type="submit">
              <a href="https://gocardless.com/" title="LFC">Subscribe!</a>
            </button>
              );
  } else if (event.target.value === "large" &&
            event.target.value === "fortnightly" &&
            event.target.value === "delivery") {
              this.setState(
            <button className="button is-link" type="submit">
              <a href="https://gocardless.com/" title="LFD">Subscribe!</a>
            </button>
              );
  }
}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state, /** form values */
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Join Our Veg Club!</h1>
            <form
              name="subscription1"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="subscription1" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field" onChange={(event) => this.showButton(event)}>
                <label className="label" htmlFor={'name'}>
                  Your name
                </label>
                <div className="control">
                <input
                  className="input"
                  type={'text'}
                  name={'name'}
                  onChange={this.handleChange}
                  id={'name'}
                  required={true}
                  placeholder={'your name'}
                />
              </div>
              </div>
              <div className="field" onChange={(event) => this.showButton(event)}>
                <label className="label" htmlFor={'email'}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={'email'}
                    name={'email'}
                    onChange={this.handleChange}
                    id={'email'}
                    required={true}
                    placeholder={'email'}
                  />
                </div>
              </div>

              <div className="field" onChange={(event) => this.showButton(event)}>
                    <label className="label" htmlFor={'phone'}>
                      Contact Number
                    </label>
                    <input
                      className="input"
                      type={'tel'}
                      name={'phone'}
                      onChange={this.handleChange}
                      id={'phone'}
                      required={true}
                      placeholder={'contact number'}
                    />
                    </div>
                    <div className="field" onChange={(event) => this.showButton(event)}>
                        <label className="label" htmlFor={'size'}>Box Size</label>
                        <select
                          name={'size'}
                          className="input"
                          required={true}
                          id={'size'}
                          onBlur={this.handleChange}>
                            <option value="" disabled selected hidden>- select size -</option>
                            <option value="Small">Small - £10</option>
                            <option value="Large">Large - £15</option>
                        </select>
                    </div>

                    <div className="field">
                      <div className="control">
                      <label className="label" htmlFor={'frequency'}>
                        Frequency
                      </label>
                      <div className="control">
                        <label className="radio">
                          <input
                            name={'frequency'}
                            /*component="input"*/
                            type={'radio'}
                            required={true}
                            onChange={this.handleChange}
                            id={'weekly'}
                            value={'weekly'}
                          />{' '}
                            Weekly
                        </label>
                        <label className="radio">
                            <input
                              name={'frequency'}
                              /*component="input"*/
                              type={'radio'}
                              required={true}
                              onChange={this.handleChange}
                              id={'fortnightly'}
                              value={'fortnightly'}
                            />{' '}
                              Fortnightly
                        </label>
                      </div>
                      </div>
                    </div>
                    <div className="field" onChange={(event) => this.showAddress(event)}>
                      <div className="field">
                        <div className="control">
                        <label className="label" htmlFor={'transport'}>
                          Transport
                          </label>
                          <div className="control">
                          <label className="radio">
                            <input
                              name={'transport'}
                              type={'radio'}
                              required={true}
                              onChange={this.handleChange}
                              id={'collection'}
                              value={'collection'}
                            />{' '}
                              Collection
                        </label>
                        <label className="radio">
                            <input
                              name={'transport'}
                              type={'radio'}
                              required={true}
                              onChange={this.handleChange}
                              id={'delivery'}
                              value={'delivery'}
                            />{' '}
                              Delivery
                        </label>
                        </div>
                      </div>
                    </div>
                  </div>

                { this.state.showAddress ?
                <>
                <div className="field">
                  <label className="label" htmlFor={'address'}>
                    Delivery Address
                  </label>
                  <sub>(£1.50 charge)</sub>
                <div className="control">
                  <textarea
                    name={'address'}
                    className="textarea"
                    onChange={this.handleChange}
                    id={'address'}
                    required={true}
                    placeholder={'delivery address'}
                  />
                </div>
              </div>
              </>: null }

              <div className="field">
                <label className="label" htmlFor={'message'}>
                  Comment/Requests
                </label>
                <div className="control">
                  <textarea
                    name={'message'}
                    className="textarea"
                    onChange={this.handleChange}
                    id={'message'}
                    required={false}
                    placeholder={'comment/requests'}
                  />
                </div>
              </div>
              <div className="buttons">
               { this.state.showButton }
               <a href="https://w3docs.com">
                <button className="button is-link" type="submit">
                  Subscribe!
                </button>
                </a>
                <button className="button is-link" type="reset">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default TestForm;
