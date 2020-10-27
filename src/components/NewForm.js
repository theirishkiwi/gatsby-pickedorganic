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
 - Check validation                              - done
 - show/hide address if delivery selected        - done
 - change submit link to https://gocardless.com
 - send email with form info*
   *(works using using Netlify for now)
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

const BoxSize = () => (
<div>
    <label>Box Size</label>
    <select id="size" required={true}>
        <option value="" disabled selected hidden>- select size -</option>
        <option value="small">Small - £10</option>
        <option value="large">Large - £15</option>
    </select>
</div>
);

const Frequency = () => (
<div>
    <label>Frequency</label>
  <div>
    <input name="frequency" type="radio" id="weekly" value="weekly" required /> Weekly
    <input name="frequency" type="radio" id="fortnightly" value="fortnightly" required /> Fortnightly
  </div>
</div>
);

function Transport() {
  const [addressVisible, setAddressVisible] = useState(false);
  return(
<div >
    <label>Transport</label>
  <div>
    <input 
      onClick={() => setAddressVisible(false)}
      name="transport" 
      type="radio" 
      id="collection" 
      value="collection" 
      required 
      /> Collection
    <input 
      onClick={() => setAddressVisible(true)}
      name="transport" 
      type="radio" 
      id="delivery" 
      value="delivery" 
      required 
      /> Delivery
  </div>
      {addressVisible ? (<Address />): (null) }
</div>
    )
};

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

function HandleSubmit(event) {
  event.preventDefault();
  //const [links, setLinks] = useState([]);
  //
  const sizeSmall = "small"
  const sizeLarge = "large"
  const frequencyWeekly = "weekly"
  const frequencyFortnightly = "fortnightly"
  const transportCollection = "collection"
  const transportDelivery = "delivery"
  //
  console.log(event.target.size.value)
  console.log(event.target.frequency.value)
  console.log(event.target.transport.value)
  // - 8 possible combinations 
      if (event.target.size.value === sizeSmall &&
         event.target.frequency.value === frequencyWeekly &&
         event.target.transport.value === transportDelivery)
         {
          const link='https://gocardless.com/SWD'
          return(
                console.log(link)
                )
         } 
  else if (event.target.size.value === sizeSmall &&
          event.target.frequency.value === frequencyWeekly &&
          event.target.transport.value === transportCollection ) 
          {
            const link='https://gocardless.com/SWC'
          return(
            console.log(link)
          )
          } 
  else if (event.target.size.value === sizeSmall &&
          event.target.frequency.value === frequencyFortnightly &&
          event.target.transport.value === transportDelivery) 
          {
            const link='https://gocardless.com/'
          return(
            console.log(link, 'SFD')
            )
          } 
  else if (event.target.size.value === sizeSmall &&
          event.target.frequency.value === frequencyFortnightly &&
          event.target.transport.value === transportCollection ) 
          {
            const link='https://gocardless.com/'
          return(
            console.log(link, 'SFC')
            )
          } 
  else if (event.target.size.value === sizeLarge &&
          event.target.frequency.value === frequencyWeekly &&
          event.target.transport.value === transportCollection) 
          {
            const link='https://gocardless.com/'
          return(
            console.log(link, 'LWC')
            )
          } 
  else if (event.target.size.value === sizeLarge &&
          event.target.frequency.value === frequencyWeekly &&
          event.target.transport.value === transportDelivery) 
          {
            const link='https://gocardless.com/'
          return(
            console.log(link, 'LWD')
            )
          } 
  else if (event.target.size.value === sizeLarge &&
          event.target.frequency.value === frequencyFortnightly &&
          event.target.transport.value === transportCollection) 
          {
            const link='https://gocardless.com/'
          return(
            console.log(link, 'LFC')
            )
          } 
  else { 
         console.log('LFD')
       };
         const link='https://gocardless.com/'
          return(
            console.log(link, 'LFD')
          )  
}

const Button = (props) => (
  <div>
    <button id="subscribe">Subscribe</button>
  </div>
)


function Form(props) {
  return(
    <form onSubmit={HandleSubmit}>
          <div>
            <div className="header">{props.title}</div>
            <Name />
            <Email />
            <Phone />
            <BoxSize />
            <Frequency />
            <Transport />
            <Comments />
            <Button  />
          </div>
    </form>
  );
  }

export default NewForm;
