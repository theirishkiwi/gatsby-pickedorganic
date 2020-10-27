// @ts-nocheck
//
//import { values } from 'lodash';
import React from 'react';
import { useState } from 'react';
import { useInputChange } from '../components/useInputChange'

/* - Form -
 1. name                 - done
 2. email                - done
 3. number               - done
 4. box size             - done
 5. frequency            - done
 6. transport            - done
 7. Delivery Address box - done
 8. Comment Box          - done
 9. Subscribe Button     - done
 
 TODO:
 - Check validation                      - Fine for now
 - show/hide address if delivery selected
 - send email with form info
 - based on selections change submit link to GoCardless.com
 - PostCode Checker
 */


const Name = () => (
    <div>
       <label>Name</label>
        <input id="name" type="text" required></input>
    </div>
    );
    
    const Email = () => (
    <div>
       <label>Email</label>
      <input id="email" type="email" required></input>
    </div>
    );
    

    const Phone = () => (
    <div>
       <label>Phone</label>
      <input id="phone" pattern="^\d{11}$" required></input>
    </div>
    );
    

    /*const BoxSize = (e) => (
    <div>
        <label>Box Size</label>
        <select id="Size" required={true} onChange={handleInputChange}>
            <option value="" disabled selected hidden>- select size -</option>
            <option value="Small">Small - £10</option>
            <option value="Large">Large - £15</option>
        </select>
    </div>
    );*/
    
    /*const Frequency = (e) => (
    <div>
        <label>Frequency</label>
      <div>
        <input onChange={handleInputChange} name="frequency" type="radio" id="weekly" value="weekly" required /> Weekly
        <input onChange={handleInputChange} name="frequency" type="radio" id="fortnightly" value="fortnightly" required /> Fortnightly
      </div>
    </div>
    );*/
    
    /*function Transport(e) {
      const [showAddress, setShowAddress] =useState(false);
      return(
      <div>
          <label>Transport</label>
        <div>
          <input 
            onClick={() => setShowAddress(false)}
            onChange={handleInputChange}
            name="transport" 
            type="radio" 
            id="collection" 
            value="collection" 
            required 
            /> Collection
          <input 
            onClick={() => setShowAddress(true)}
            onChange={handleInputChange}
            name="transport" 
            type="radio" 
            id="delivery" 
            value="delivery" 
            required 
            /> Delivery
        </div>
          {showAddress ? (<Address />) : (null) }
      </div>
      )};*/
    
    
    const Address = () => (
    <div>
        <label>Delivery Address</label>
      <div>
        <textarea id="address"></textarea>
      </div>
    </div>
    )
    
    const Comments = () => (
    <div>
        <label>Comments</label>
      <div>
        <textarea id="comments"></textarea>
      </div>
    </div>
    )
  
    
    function HandleSubmit(e) {
      e.preDefault();
      console.log(e.currentTarget.value)
      console.log(e.target.name.value)
      console.log(e.target.email.value)
      console.log(e.target.phone.value)
      console.log(e.target.size.value)
      console.log(e.target.frequency.value)
      console.log(e.target.transport.value)
      console.log(e.target.address.value)
      console.log(e.target.comments.value)
    }

    const Button = () => {
      <button className="button is-link" type="submit">
        <a href="https://gocardless.com/" title="SWD">Subscribe!</a>
      </button>
    }

    /*function Button(e) {
      const [hidden, setHidden] = useState(true);
      if (e.currentTarget.value === "small" &&
          e.target.value === "weekly" &&
          e.target.value === "delivery") {
            return(
              <button className="button is-link" type="submit">
                { setHidden ? (<a href="https://gocardless.com/" title="SWD">Subscribe!</a>) : (null) }
              </button>
            )
    } else if (e.target.value === "small" &&
              e.target.frequency.value === "weekly" &&
              e.target.Transport.value === "collection") {
                 return(
                <button className="button is-link" type="submit">
                  { setHidden ? (<a href="https://gocardless.com/" title="SWC">Subscribe!</a>) : (null) }
                </button>
                );
    } else if (e.target.size.value === "small" &&
              e.target.frequency.value === "fortnightly" &&
              e.target.Transport.value === "delivery") {
              return(
              <button className="button is-link" type="submit">
                { setHidden ? (<a href="https://gocardless.com/" title="SFD">Subscribe!</a>) : (null) }
              </button>
                );
    } else if (e.target.size.value === "small" &&
              e.target.frequency.value === "fortnightly" &&
              e.target.transport.value === "collection") {
                return(
              <button className="button is-link" type="submit">
                { setHidden ? (<a href="https://gocardless.com/" title="SFC">Subscribe!</a>) : (null) }
              </button>
                );
    } else if (e.target.size.value === "large" &&
              e.target.frequency.value === "weekly" &&
              e.target.transport.value === "collection") {
                return(
              <button className="button is-link" type="submit">
                { setHidden ? (<a href="https://gocardless.com/" title="LWC">Subscribe!</a>) : (null) }
              </button>
                );
    } else if (e.target.size.value === "large" &&
              e.target.frequency.value === "weekly" &&
              e.target.transport.value === "delivery") {
                return(
              <button className="button is-link" type="submit">
                { setHidden ? (<a href="https://gocardless.com/" title="LWD">Subscribe!</a>) : (null) }
              </button>
                );
    } else if (e.target.size.value === "large" &&
              e.target.frequency.value === "fortnightly" &&
              e.target.transport.value === "collection") {
                return(
              <button className="button is-link" type="submit">
              { setHidden ? (<a href="https://gocardless.com/" title="LFC">Subscribe!</a>) : (null) }
              </button>
                );
    } else { (e.target.size.value === "large" &&
              e.target.frequency.value === "fortnightly" &&
              e.target.transport.value === "delivery")
                return(
                  <button className="button is-link" type="submit">
                    { setHidden ? (<a href="https://gocardless.com/" title="LFD">Subscribe!</a>) : (null) }
                  </button>
                );
           }
          }*/
    
    
    function NewForm(props) {
      const [input, handleInputChange] = useInputChange()

      function Transport(e) {
        const [showAddress, setShowAddress] =useState(false);
        return(
        <div>
            <label>Transport</label>
          <div>
            <input 
              onClick={() => setShowAddress(false)}
              onChange={handleInputChange}
              name="transport" 
              type="radio" 
              id="collection" 
              value="collection" 
              required 
              /> Collection
            <input 
              onClick={() => setShowAddress(true)}
              onChange={handleInputChange}
              name="transport" 
              type="radio" 
              id="delivery" 
              value="delivery" 
              required 
              /> Delivery
          </div>
            {showAddress ? (<Address />) : (null) }
        </div>
        )};
 
          return(
        <form onSubmit={HandleSubmit}>
              <div>
                <div className="header">{props.title}</div>
                <Name />
                <Email />
                <Phone />
                {/*<BoxSize />*/}
                <div>
                    <label>Box Size</label>
                    <select id="Size" required={true} onChange={handleInputChange}>
                        <option value="" disabled selected hidden>- select size -</option>
                        <option value="Small">Small - £10</option>
                        <option value="Large">Large - £15</option>
                    </select>
                </div>
                {/*<Frequency />*/}
                <div>
                    <label>Frequency</label>
                  <div>
                    <input onChange={handleInputChange} name="frequency" type="radio" id="weekly" value="weekly" required /> Weekly
                    <input onChange={handleInputChange} name="frequency" type="radio" id="fortnightly" value="fortnightly" required /> Fortnightly
                  </div>
                </div>
                <Transport />
                <Comments />
                <Button />
              </div>
        </form>
      );
      }

export default NewForm;