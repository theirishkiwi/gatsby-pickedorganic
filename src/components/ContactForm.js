import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Choose your veg box and subscribe</h1>
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
                    />
                  </div>
                </div>  
                   <div className="field">
                      <label className="label" htmlFor={'size'}>
                         Veg Box Size
                      </label>
                      <div className="control">
                        <select 
                          className="input"
                          name={'size'}
                          aria-label="size required" 
                          required
                        >
                          <option 
                            value="" 
                            disabled="" 
                            selected="">
                              - Select from List -
                          </option>
                          <option 
                            name="smallbox" 
                            value="Small Veg Box - £10">
                              Small - £10
                          </option>
                          <option 
                            name="largebox" 
                            value="Large Veg Box - £15"
                            >
                              Large - £15
                          </option>
                        </select>
                      </div>
                  </div>

                  <div className="field">
                      <label className="label" htmlFor={'transport'}>
                          Delivered or Collection
                      </label>
                      <div className="control">
                        <select 
                          className="input"
                          name={'transport'}
                          aria-label="transport" 
                          required
                        >
                          <option 
                            value="" 
                            disabled="" 
                            selected="">
                              - Select from List -
                          </option>
                          <option 
                            name="collect" 
                            value="Collect">
                              Collect
                          </option>
                          <option 
                            name="delivered" 
                            value="Delivered - £1.50"
                            >
                              Delivered - £1.50
                          </option>
                        </select>
                      </div>
                  </div>
                  
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Comments/Requests
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
    )
  }
}
