import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function Address() {
  return (
    <div className="field">
      <div className="control">
        <label className="label" htmlFor={'address'}>
          Delivery Address
        </label>
        <sub>(£1.50 charge)</sub>
        <textarea
          name={'address'}
          className="textarea"
          /*onChange={this.handleChange}*/
          id={'address'}
          type={'textarea'}
          placeholder={'delivery address'}
        />
      </div>
    </div>
  );
}

class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  state = {
    showAddress: false
  }

  showAddress(event) {
    if (event.target.value === "delivery") {
      this.setState({ showAddress: true });
    } else {
      this.setState({ showAddress: false });
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
        ...this.state
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
              name="subscription"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="subscription" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field">
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
              <div className="field">
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

              <div className="field">
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
                    <div className="field">
                        <label className="label" htmlFor={'size'}>Box Size</label>
                        <select
                          name={'size'}
                          className="input"
                          required={true}
                          id={'size'}
                          onBlur={this.handleChange}>
                            <option value="" disabled selected>- select size -</option>
                            <option value="Small">Small - £10</option>
                            <option value="Large">Large - £15</option>
                        </select>
                    </div>

                    <div class="field">
                      <div class="control">
                      <label className="label" htmlFor={'frequency'}>
                        Frequency
                      </label>
                      <div className="control">
                        <label class="radio">
                          <input
                            name={'frequency'}
                            component="input"
                            type={'radio'}
                            required={true}
                            onChange={this.handleChange}
                            id={'weekly'}
                            value={'weekly'}
                          />{' '}
                            Weekly
                        </label>
                        <label class="radio">
                            <input
                              name={'frequency'}
                              component="input"
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
                      <div class="field">
                        <div class="control">
                        <label className="label" htmlFor={'transport'}>
                          Transport
                          </label>
                          <div className="control">
                          <label class="radio">
                            <input
                              name={'transport'}
                              component="input"
                              type={'radio'}
                              required={true}
                              onChange={this.handleChange}
                              id={'collection'}
                              value={'collection'}
                            />{' '}
                              Collection
                        </label>
                        <label class="radio">
                            <input
                              name={'transport'}
                              component="input"
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

              <div>
                {
                  this.state.showAddress ? 
                  <Address 
                    onChange={this.handleChange}
                  /> : null
                }
              </div>

              <div className="field">
                <label className="label" htmlFor={'message'}>
                  Comment/Requests
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name={'message'}
                    onChange={this.handleChange}
                    id={'message'}
                    required={false}
                    placeholder={'comment/requests'}
                  />
                </div>
              </div>

              <div className="buttons">
                <button className="button is-link" type="submit">
                  Subscribe!
                </button>
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
