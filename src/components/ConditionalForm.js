import React from 'react'
import { render } from 'react-dom'
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


const ConditionalForm = () => (
    <section className="section">
        <div className="container">
            <div className="content">
              <h2>Join our Veg Club</h2>
                <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.Name) {
                    errors.Name = 'Required'
                    }
                    if (!values.reception) {
                    errors.reception = 'Required'
                    }
                    if (values.reception === 'delivery') {
                    if (!values.address) {
                        errors.address = 'Required'
                    }
                    } else if (values.reception === 'pickup') {
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
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    >
                    <div className="field">
                        <label className="label">Your Name</label>
                        <Field
                        className="input"
                        name="Name"
                        component="input"
                        type="text"
                        placeholder="your name"
                        />
                        <Error name="Name" />
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <Field
                        className="input"
                        name="email"
                        component="input"
                        type="email"
                        placeholder="email"
                        />
                        <Error name="email" />
                    </div>

                    <div className="field">
                        <label className="label">Contact Number</label>
                        <Field
                        className="input"
                        name="tel"
                        component="input"
                        type="tel"
                        placeholder="contact number"
                        />
                        <Error name="tel" />
                    </div>
                    <div className="field">
                        <label className="label">Box Size</label>
                        <div className="control">
                        <label className="label">
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
                        <label className="label">Transport</label>
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
                        <label className="label">
                            Delivery Address
                        </label>
                        <Field
                            className="textarea"
                            name="address"
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
                        <label className="label">
                            Comment/Request
                        </label>
                        <Field
                            className="textarea"
                            name="comment"
                            component="textarea"
                            type="textarea"
                            placeholder="comment/request"
                        />
                        <Error name="comment" />
                        </div>
                      </div>
                    
                    <div className="buttons">
                        <button className="button is-link" type="submit" disabled={submitting}>
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

export default ConditionalForm
