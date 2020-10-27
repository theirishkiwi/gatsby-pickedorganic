import PropTypes from 'prop-types'
import React from 'react'

const orders = {
  SIZE: {
    SMALL: "size.small",
    LARGE: "size.large"
  },
  FREQUENCY: {
    WEEKLY: "weekly",
    FORTNIGHTLY: "fortnightly"
  },
  TRANSPORT: {
    COLLECTION: "collection",
    DELIVERY: "delivery"
  }
};

let order = orders.SIZE.LARGE + orders.FREQUENCY.WEEKLY + orders.SIZE.LARGE

if (!order) {
  throw new Error("Order is not defined");
}

switch (order) {
  case orders.SIZE.SMALL:
  // Do something for summer beginning
  case orders.SIZE.LARGE:
  // Do something for summer ending
  case orders.FREQUENCY.WEEKLY:
  // This will work if order = orders.SUMMER
  // Do something for summer (generic)
  case orders.FREQUENCY.FORTNIGHTLY:
  //Do something for winter
  case orders.TRANSPORT.COLLECTION:
  //Do something for spring
  case orders.TRANSPORT.DELIVERY:
  //Do something for autumn
}


/*export default Button*/
