import React from 'react'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
)

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)


const ConditionalForm1 = () => (
    <section className="section">
        <div className="container">
            <div className="content">
              <h2>Join our Veg Club</h2>
                <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.yourName) {
                    errors.yourName = 'Required'
                    }
                    if (!values.email) {
                    errors.email = 'Required'
                    }
                    if (!values.tel) {
                        errors.tel = 'Required'
                    }
                    if (!values.size) {
                        errors.size = 'Required'
                    }
                    if (values.transport === 'delivery') {
                    if (!values.address) {
                        errors.address = 'Required'
                    }
                    if (!values.requests) {
                        errors.requests = 'Required'
                    }
                    } else if (values.transport === 'collection') {
                    if (!values.pickupTime) {
                        errors.pickupTime = 'Required'
                    }
                    }
                    return errors
                }}
                >
                {({ handleSubmit, form, submitting, pristine, values }) => (
                    <form
                    name="subscription"
                    method="post"
                    action="/components/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                    <label>Don’t fill out:{' '}<input name="bot-field" /></label>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="yourName">Your Name</label>
                        <Field
                        name="yourName"
                        className="input"
                        component="input"
                        type="text"
                        placeholder="your name"
                        />
                        <Error name="Name" />
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="email">Email</label>
                        <Field
                        name="email"
                        className="input"
                        component="input"
                        type="email"
                        placeholder="email"
                        />
                        <Error name="email" />
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="tel">Contact Number</label>
                        <Field
                        name="tel"
                        className="input"
                        component="input"
                        type="tel"
                        placeholder="contact number"
                        />
                        <Error name="tel" />
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="size">Box Size</label>
                        <div className="control">
                        <label className="label" htmlFor="size">
                        <Field className="input" name="size" component="select">
                            <option value="" disabled>- select size -</option>
                            <option value="Small">Small - £10</option>
                            <option value="Large">Large - £15</option>
                        </Field>
                        </label>
                    </div>
                    </div>
                    <div class="field">
                        <div class="control">
                        <label className="label" htmlFor="transport">Transport</label>
                        <div className="control">
                        <label class="radio">
                          <Field
                            name="transport"
                            component="input"
                            type="radio"
                            value="delivery"
                          />{' '}
                            Delivery
                        </label>
                        <label class="radio">
                          <Field
                            name="transport"
                            component="input"
                            type="radio"
                            value="collect"
                          />{' '}
                            Collection
                        </label>
                        </div>
                        </div>
                        <Error name="transport" />
                    </div>
                    <Condition when="transport" is="delivery">
                      <div className="field">
                        <div class="control">
                        <label className="label" htmlFor="address">
                            Delivery Address
                        </label>
                        <sub>(£1.50 charge)</sub>
                        <Field
                            name="address"
                            className="textarea"
                            component="textarea"
                            type="textarea"
                            placeholder="delivery address"
                        />
                        <Error name="address" />
                        </div>
                      </div>
                    </Condition>

                    <div className="field">
                        <div class="control">
                        <label className="label" htmlFor="requests">
                            Comment/Requests
                        </label>
                        <Field
                            className="textarea"
                            name="requests"
                            component="textarea"
                            type="textarea"
                            placeholder="comment/requests"
                        />
                        <Error name="requests" />
                        </div>
                      </div>
                    
                    <div className="buttons">
                        <button className="button is-link" type="submit">
                        Subscribe
                        </button>
                        <button className="button is-link" type="button" onClick={form.reset} disabled={submitting}>
                        Reset
                        </button>
                    </div>
                    </form>
                )}
                </Form>
            </div>
        </div>
    </section>
)

export default ConditionalForm1