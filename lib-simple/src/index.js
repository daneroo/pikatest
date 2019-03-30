
// // These break!!!!
import Welcome from './Welcome' // eslint-disable-line no-unused-vars
import Greeter from './Greeter' // eslint-disable-line no-unused-vars

export { Welcome } from './Welcome'
export { Greeter } from './Greeter'

// This didn't help @pika/plugin-build-types
export default { Welcome, Greeter }
