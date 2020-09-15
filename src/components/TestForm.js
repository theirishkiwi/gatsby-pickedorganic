import React from 'react'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const TestForm = () => (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form 
            name="test"
            onSubmit={handleSubmit}
            method="post"
            /*action="/contact/thanks/" */
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="test" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" />
                  </label>
                </div>
          <div class="field">
            <label className="label">First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="field">
            <label className="label">Last Name</label>
            <Field 
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div class="field">
            <label className="label">Employed</label>
            <Field name="employed" component="input" type="checkbox" />
          </div>
          <div class="field">
            <label className="label">Favorite Color</label>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="#ff0000">❤️ Red</option>
              <option value="#00ff00">💚 Green</option>
              <option value="#0000ff">💙 Blue</option>
            </Field>
          </div>
          <div class="field">
            <label className="label">Toppings</label>
            <Field name="toppings" component="select" multiple>
              <option value="chicken">🐓 Chicken</option>
              <option value="ham">🐷 Ham</option>
              <option value="mushrooms">🍄 Mushrooms</option>
              <option value="cheese">🧀 Cheese</option>
              <option value="tuna">🐟 Tuna</option>
              <option value="pineapple">🍍 Pineapple</option>
            </Field>
          </div>
          <div class="field">
            <label className="label">Sauces</label>
            <div class="field">
              <label class="label">
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="ketchup"
                />{' '}
                Ketchup
              </label>
              <label class="label">
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mustard"
                />{' '}
                Mustard
              </label>
              <label class="label">
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mayonnaise"
                />{' '}
                Mayonnaise
              </label>
              <label class="label">
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="guacamole"
                />{' '}
                Guacamole
              </label>
            </div>
          </div>
          <div>
            <label className="label">Best Stooge</label>
            <div>
              <label class="label">
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="larry"
                />{' '}
                Larry
              </label>
              <label class="label">
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="moe"
                />{' '}
                Moe
              </label>
              <label class="label">
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="curly"
                />{' '}
                Curly
              </label>
            </div>
          </div>
          <div class="field">
            <label className="label">Notes</label>
            <Field className="textarea" name="notes" component="textarea" placeholder="Notes" />
          </div>
          <div className="buttons">
            <button className="button is-link" type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
              className="button is-link"
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
)

export default TestForm
