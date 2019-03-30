
// // These break!!!!
// import { Welcome } from './Welcome'
// import { Greeter } from './Greeter'

// export {
//   Greeter, Welcome
// }

import React from 'react'
import PropTypes from 'prop-types'

export const Greeter = (name) => `Hello ${name}, from a library`

export function Welcome ({ name = 'Dan-eroo' }) {
  return (<h4>Hello, {name}</h4>)
}

Welcome.propTypes = { name: PropTypes.string }
Welcome.defaultProps = { name: 'Dan-eroo' }
