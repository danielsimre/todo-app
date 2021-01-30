// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
import 'semantic-ui-css/semantic.min.css'
const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)
